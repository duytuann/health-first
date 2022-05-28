package com.springboot.userservice.utils;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.Base64Utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenUtils {
    public static final long JWT_TOKEN_VALIDITY = 300 * 60 * 60;
    public static final long JWT_REFRESH_TOKEN_VALIDITY = 180 * 60 * 60;
    public static final String preToken = "HealthFirst";
    private static final String secret = "scent";
    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public String getChecksumFromToken(String token) {
        Claims claims = getAllClaimsFromToken(token);
        return claims.get("checksum", String.class);
    }

    @SuppressWarnings("unchecked")
    public String getRoleFromToken(String token) {
        Claims claims = getAllClaimsFromToken(token);
        ArrayList<String> roles = claims.get("roles", ArrayList.class);
        return roles.stream().collect(Collectors.joining(","));
    }

    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build().parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    public String generateAccessToken(UserDetails userDetails) {
        // get all authorities of the user.
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).toArray());
        // .stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
        claims.put("checksum", generateCheckSum(userDetails.getUsername(),
                userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority)
                        .collect(Collectors.joining(","))));
        Date now = Calendar.getInstance(TimeZone.getDefault()).getTime();
        JwtBuilder builder = Jwts.builder()
                .setId(UUID.randomUUID().toString().replace("-", ""))
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + JWT_TOKEN_VALIDITY))
                .setSubject(userDetails.getUsername())
                .addClaims(claims)
                .signWith(key);
        return preToken + builder.compact();
    }

    public String generateRefreshToken(UserDetails userDetails) {
        Date now = Calendar.getInstance(TimeZone.getDefault()).getTime();
        JwtBuilder builder = Jwts.builder()
                .setId(UUID.randomUUID().toString().replace("-", ""))
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + JWT_REFRESH_TOKEN_VALIDITY))
                .setSubject(userDetails.getUsername());
        // .signWith(key);
        return preToken + builder.compact();
    }

    public Boolean validateToken(String token) {
        token = token.substring("Bearer ".length() + preToken.length());
        final String username = getUsernameFromToken(token);
        final String role = getRoleFromToken(token);
        final String checksum = getChecksumFromToken(token);
        return !isTokenExpired(token) && checksum.equals(generateCheckSum(username, role));
    }

    public Boolean validateRefreshToken(String token) {
        token = token.substring(preToken.length());
        return true;
    }

    public String generateCheckSum(String username, String authorities) {
        String checksum = username + secret + authorities;
        byte[] encodedHash = null;
        MessageDigest digest;
        try {
            digest = MessageDigest.getInstance("SHA-256");
            encodedHash = digest.digest(checksum.getBytes(StandardCharsets.UTF_8));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        return Base64Utils.encodeToString(encodedHash);

    }
}
