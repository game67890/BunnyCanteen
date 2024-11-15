package com.snkc.services;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class HttpClientService {
    private static final int TIMEOUT = 60000;
    private final RestTemplate restTemplate;

    public HttpClientService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public FbAccessTokenResponse verifyFbAccessToken(final String uri) {
        return this.restTemplate.getForObject(uri, FbAccessTokenResponse.class);
    }

    public FBGetTokenResult getFbAppAccessToken(final String uri)
    {
        return this.restTemplate.getForObject(uri, FBGetTokenResult.class);
    }

    public String get(final String url)
    {
        var responseEntity = restTemplate.getForEntity(url, String.class);
        return responseEntity.getBody();
 //       return restTemplate.getForObject(url, String.class);
    }
}
