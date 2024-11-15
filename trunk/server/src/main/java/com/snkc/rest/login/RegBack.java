package com.snkc.rest.login;

public record RegBack(String userID, String jwt, long jwtExpireTime, int code, int sdk) {
}
