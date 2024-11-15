package com.snkc.services;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

//public record
@JsonIgnoreProperties(ignoreUnknown = true)
public record FbAccessTokenResponse(Data data) {
    public record Data(String app_id,
                       String type,
                       String application,
                       Long data_access_expires_at,
                       Long expires_at,
                       boolean is_valid,
                       int issued_at,
                       int profile_id,
                       List<String> scopes,
                       String user_id
    ) {}
}
