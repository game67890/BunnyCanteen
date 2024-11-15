package com.snkc.rest.login;

public record RecoverBack(String recoverUserID, String jwt, long jwtExpireTime, int code) {
}
