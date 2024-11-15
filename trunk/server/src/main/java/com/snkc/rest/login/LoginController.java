package com.snkc.rest.login;

import com.alibaba.fastjson2.JSONObject;
import com.google.gson.JsonObject;
import com.snkc.data.DataManager;
import com.snkc.event.eventImpl.AchievementEvent;
import com.snkc.event.eventImpl.MissionEvent;
import com.snkc.event.publisher.EventPublisher;
import com.snkc.game.rank.RankService;
import com.snkc.game.rank.responsebean.RankInfo;
import com.snkc.log.LogUtil;
import com.snkc.model.MissionData;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.repository.MissionDataRepository;
import com.snkc.rest.invite.InviteService;
import com.snkc.security.providers.JwtTokenProvider;
import com.snkc.serverjsonbean.OtherParameter;
import com.snkc.services.FBVerifyService;
import com.snkc.services.TelegramAvatarFetcher;
import com.snkc.services.TelegramUserFetcher;
import com.snkc.util.Misc;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@CrossOrigin
public class LoginController {
    Logger logger = LoggerFactory.getLogger(LoginController.class);

    private boolean checkUserValid(String userID, int sdk, String accessToken)
    {
        switch (sdk)
        {
            case 0:
            case 2:
                return true;
            case 1: return fbVerifyService.getFbUserIDFromAccessToken(accessToken) != null;
            default: return false;
        }
    }
    @Autowired
    FBVerifyService fbVerifyService;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    @Autowired
    LoginRepository loginRepo;
    @Autowired
    EventPublisher eventPublisher;
    @Autowired
    RankService rankService;
    @Autowired
    InviteService inviteService;
    @Autowired
    DataManager dataManager;
    @Autowired
    MissionDataRepository missionDataRepository;

    @Autowired
    TelegramAvatarFetcher telegramAvatarFetcher;
    @Autowired
    TelegramUserFetcher telegramUserFetcher;

    @PostMapping(value="/login")
    public ResponseEntity<String> onLogin(@RequestBody Login login) throws IOException {
        logger.info("Login with id = " + login.userID());
        logger.info("Login info = " + login.toString());
        JsonObject jsonObject = new JsonObject();
        if (!checkUserValid(login.userID(), login.sdk(), login.token()))
        {
            jsonObject.addProperty("result",false);
            return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
        }
        var userById = loginRepo.findById(login.userID());
        User user;
        if (userById.isEmpty())
        {
            user = new User(login.userID());
            user.initUserInfo();
            if (!login.inviter().isEmpty()){
                logger.info("Reg with inviter = " + login.inviter());
                user.setInviter(login.inviter());
                inviteService.addInvitee(login.inviter(),login.userID());
                //给邀请者增加兔子币
                inviteService.addInviterCarrotCoin(login.inviter());
                //给被邀请者增加兔子币
                OtherParameter otherParameter = dataManager.getCfgFile(OtherParameter.class).get(5);
                if (otherParameter != null){
                    user.addCarrotCoin(Integer.parseInt(otherParameter.parameter()));
                }
            }
            loginRepo.save(user);
            MissionData missionData = new MissionData(login.userID(),0);
            missionDataRepository.save(missionData);
            logger.info("Login newUser UserID = " + login.userID());
            LogUtil.doRegLog(user.getId());
            //this.telegramAvatarFetcher.downloadHeadImg(login.userID());

        }else {
            user = userById.get();
        }
        var jwtResult = jwtTokenProvider.generateToken(login.userID());
        jsonObject.addProperty("userID",login.userID());
        jsonObject.addProperty("jwt",jwtResult.jwt);
        jsonObject.addProperty("jwtExpireTime",jwtResult.expiredTime);
        jsonObject.addProperty("current",System.currentTimeMillis());
        user.getUserInfo(jsonObject);
        JSONObject loginJson = new JSONObject();
        loginJson.put("addNum",1);
        eventPublisher.publish(new MissionEvent(login.userID(),MissionEvent.MISSION_TYPE_LOGIN_DAILY,loginJson.toString()));
        eventPublisher.publish(new AchievementEvent(login.userID(),AchievementEvent.ACHIEVEMENT_LOGIN_TOTAL,loginJson.toString()));
        LogUtil.doLoginLog(user.getId());


        RankInfo myRankInfo = rankService.myRankInfo(login.userID(), 1);

        // 玩家在兔子币榜的段位 Rank.xlsx 的id
        jsonObject.addProperty("rankConfId", myRankInfo.rankConfId());
        // 玩家在兔子币榜的排名
        jsonObject.addProperty("tuZiCoinRankIds", myRankInfo.idx());

        jsonObject.addProperty("userName", user.getUserName());
        jsonObject.addProperty("serverTimeStamp", System.currentTimeMillis());

//        String token = user.getToken();
        final String randomToken = Misc.getRamdonToken();
        user.setToken(randomToken);
        loginRepo.save(user);
        jsonObject.addProperty("ramdonToken", randomToken);
        logger.info("{} token is [{}]", login.userID(), randomToken);

//        doTokenCache(login.userID(), jsonObject);

        this.telegramAvatarFetcher.downloadHeadImg(login.userID());
        this.telegramUserFetcher.getTelegramUserName(login.userID());
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(jsonObject.toString());
    }

    @PostMapping(value="/reg")
    public ResponseEntity<RegBack> onReg(@RequestBody Reg reg) {
        logger.info("reg with id=" + reg.userID());
//        if (!checkUserValid(reg.userName(), reg.sdk(), reg.token()))
//        {
//            return ResponseEntity.status(HttpStatus.OK)
//                    .body(new RegBack(reg.userName(), "", 0,1, 0));
//        }
        var userById = loginRepo.findById(reg.userID());
        if (!userById.isPresent())
        {
            for (int i = 0; i < 100; i++) {
                userById = loginRepo.findById(reg.userID());
                if (!userById.isPresent())
                {
                    var jwtGenerateResult = jwtTokenProvider.generateToken(reg.userID());
                    User newUser = new User(reg.userID());
                    newUser.initUserInfo();
                    loginRepo.save(newUser);
                    return ResponseEntity.status(HttpStatus.OK)
                            .header(HttpHeaders.AUTHORIZATION, jwtGenerateResult.jwt)
                            .header(HttpHeaders.EXPIRES, String.valueOf(jwtGenerateResult.expiredTime))
                            .body(
                            new RegBack(reg.userID(), jwtGenerateResult.jwt, jwtGenerateResult.expiredTime,0, 0));
                }
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new RegBack(reg.userID(), "", 0, 2, 0));
        } else {
            var jwtGenerateResult = jwtTokenProvider.generateToken(reg.userID());
            return ResponseEntity.status(HttpStatus.OK)
                    .header(HttpHeaders.AUTHORIZATION, jwtGenerateResult.jwt)
                    .header(HttpHeaders.EXPIRES, String.valueOf(jwtGenerateResult.expiredTime))
                    .body(
                            new RegBack(reg.userID(), jwtGenerateResult.jwt, jwtGenerateResult.expiredTime,0, 0));
        }


    }

//    @PostMapping(value="/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity onUpload(@RequestPart("json") Upload upload, @RequestPart("file") MultipartFile multipartFile, @RequestAttribute("userID") String userId) throws IOException {
//        //var userId = upload.userName();
//        var userById = loginRepo.findById(userId);
//        if (!userById.isPresent())
//        {
//            return ResponseEntity.status(HttpStatus.OK).body(new UploadBack("User not found!"));
//        }
//        var userInstance = userById.get();
//        userInstance.setSave(new Binary(multipartFile.getBytes()));
//        loginRepo.save(userInstance);
//        return ResponseEntity.status(HttpStatus.OK).body(new UploadBack("Success!!!"));
//    }

//    @PostMapping(value="/uploadtest")
//    public ResponseEntity onUpload(@RequestBody Upload upload)
//    {
//        return ResponseEntity.status(HttpStatus.OK).body(new UploadBack("Success!!!"));
//    }

//    @PostMapping(value="/download")
//    public ResponseEntity onDownload(@RequestBody Download download, @RequestAttribute("userID") String userId) throws Exception {
//        //var userId = download.userID();
//        var userById = loginRepo.findById(userId);
//        if (!userById.isPresent())
//        {
//            return ResponseEntity.status(HttpStatus.OK).build();
//        }
//        var userInstance = userById.get();
//        MultiValueMap<String, Object> formData = new LinkedMultiValueMap<String, Object>();
//        HttpHeaders metadataHeaders = new HttpHeaders();
//        metadataHeaders.setContentType(MediaType.APPLICATION_JSON);
//        formData.add("metadata", new HttpEntity<>(new DownloadBack("Success!")));
//        HttpHeaders contentHeaders = new HttpHeaders();
//        contentHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//        formData.add("contents", new HttpEntity<>(new InputStreamResource(
//                new ByteArrayInputStream(userInstance.getSave() == null ? new byte[0] : userInstance.getSave().getData())), contentHeaders));
//        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.MULTIPART_FORM_DATA).body(formData);
//    }

//    @GetMapping(value="/downloadtest")
//    public ResponseEntity onDownloadTest(@RequestAttribute("userID") String userID) throws Exception
//    {
//        var userById = loginRepo.findById(userID);
//        if (!userById.isPresent())
//        {
//            return ResponseEntity.status(HttpStatus.OK).build();
//        }
//        var userInstance = userById.get();
//        MultiValueMap<String, Object> formData = new LinkedMultiValueMap<String, Object>();
//        HttpHeaders metadataHeaders = new HttpHeaders();
//        metadataHeaders.setContentType(MediaType.APPLICATION_JSON);
//        formData.add("metadata", new HttpEntity<>(new DownloadBack("Success!")));
//        HttpHeaders contentHeaders = new HttpHeaders();
//        contentHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//        formData.add("contents", new HttpEntity<>(new InputStreamResource(
//                new ByteArrayInputStream(new byte[0])), contentHeaders));
//        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_OCTET_STREAM).body(formData);
//    }


}
