package com.snkc.rest.mission;

import com.alibaba.fastjson2.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/mission")
public class MissionsAndAchievementController {

    Logger logger = LoggerFactory.getLogger(MissionsAndAchievementController.class);

    @Autowired
    MissionsAndAchievementService missionsAndAchievementService;

    @PostMapping(value="/panel")
    public ResponseEntity<String> onPanel(@RequestAttribute("userID") String userID) throws IOException {
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(missionsAndAchievementService.genPanelJson(userID));
    }

    @PostMapping(value="/finishAchievement")
    public ResponseEntity<String> onFinishAchievement(@RequestAttribute("userID") String userID,@RequestBody String json ) throws IOException {
        JSONObject jsonObject = JSONObject.parseObject(json);
        int achievementID = jsonObject.getIntValue("achievementID",0);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(missionsAndAchievementService.achievementFinish(userID,achievementID));
    }

    @PostMapping(value="/updateMission")
    public ResponseEntity<String> onUpdateMission(@RequestAttribute("userID") String userID,@RequestBody String json ) throws IOException {
        JSONObject jsonObject = JSONObject.parseObject(json);
        int missionType = jsonObject.getIntValue("missionType",0);
        return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON).body(missionsAndAchievementService.updateMissionProgress(userID,missionType));
    }

}
