package com.snkc.security.providers;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {
    @Value("${app.jwt.secret}")
    private String jwtSecret;

    @Value("${app.jwt.expirationInMs}")
    private int jwtExpirationInMs;

    public static class JwtGenerateResult
    {
        public String jwt;
        public Long expiredTime;
    }

    public JwtGenerateResult generateToken(String userID) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        JwtGenerateResult ret = new JwtGenerateResult();
        ret.jwt = Jwts.builder()
                .setId(userID)
                .setSubject(userID)
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();
        ret.expiredTime = expiryDate.getTime();
        return ret;
    }

    public String getUsernameFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();

        return claims.getId();
    }

//    public List<GrantedAuthority> getAuthoritiesFromToken(String token) {
//        Claims claims = Jwts.parser()
//                .setSigningKey(jwtSecret)
//                .parseClaimsJws(token)
//                .getBody();
//
//        List<String> roles = claims.get("roles", List.class);
//        return roles.stream()
//                .map(SimpleGrantedAuthority::new)
//                .collect(Collectors.toList());
//    }

//    public boolean validateToken(String authToken) {
//        try {
//            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
//            return true;
//        } catch (Exception e) {
//            // Log the exception
//        }
//        return false;
//    }
}
