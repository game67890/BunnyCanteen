package com.snkc.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.time.Instant;

@Service
public class FBVerifyService {
    @Value("${app.fb.tokenuri}")
    private String fbGetTokenUri;
    @Value("${app.fb.verifyuri}")
    private String fbVerifyUrlFmt;

    private String appAccessToken;
    private Long accessTokenExpireAt; // second

    @Autowired
    private HttpClientService httpClientService;

    private String getAppAccessToken()
    {
        if (appAccessToken == null || Instant.now().toEpochMilli() > accessTokenExpireAt * 1000)
        {
            var response = httpClientService.getFbAppAccessToken(fbGetTokenUri);
            appAccessToken = response.access_token();
        }
        return appAccessToken;
    }

    private Logger logger = LoggerFactory.getLogger(FBVerifyService.class);
    public String getFbUserIDFromAccessToken(String inspectToken)
    {
        var verifyUri = fbVerifyUrlFmt.formatted(inspectToken, getAppAccessToken());
        //var responseStr = httpClientService.get(verifyUrl);
        logger.info("Verify access token at " + verifyUri);
        var response = httpClientService.verifyFbAccessToken(verifyUri);
        MultiValueMap<String, Object> formData = new LinkedMultiValueMap<String, Object>();
        HttpHeaders metadataHeaders = new HttpHeaders();
        metadataHeaders.setContentType(MediaType.APPLICATION_JSON);
        accessTokenExpireAt = response.data().data_access_expires_at();
        return response.data().user_id();
    }
}
