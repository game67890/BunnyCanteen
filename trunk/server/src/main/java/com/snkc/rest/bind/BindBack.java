package com.snkc.rest.bind;

public record BindBack(String userID, String jwt, long jwtExpireTime, int code, int sdk) {
}
