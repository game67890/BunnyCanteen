package com.snkc.rest.login;

public record LoginBack(String userID, String jwt, long jwtExpireTime, int code, int sdk) {
}
