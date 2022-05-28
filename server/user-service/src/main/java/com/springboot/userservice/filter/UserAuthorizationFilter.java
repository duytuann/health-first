package com.springboot.userservice.filter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.servlet.http.HttpServletResponse;

import com.springboot.userservice.utils.JwtTokenUtils;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.RequiredArgsConstructor;

/**
 * UserAuthorizationFilter
 */
@RequiredArgsConstructor
public class UserAuthorizationFilter extends OncePerRequestFilter {

    private final JwtTokenUtils jwtTokenUtils;

    @Override
    protected void doFilterInternal(javax.servlet.http.HttpServletRequest request,
            javax.servlet.http.HttpServletResponse response, javax.servlet.FilterChain filterChain)
            throws java.io.IOException, javax.servlet.ServletException {
        if (request.getServletPath().equals("/login")) {
            filterChain.doFilter(request, response);
        } else {
            // authResult.getPrincipal();
            String token = request.getHeader("Authorization");
            // Authentication authentication =
            // authenticationManager.authenticate(authorizationHeader);
            if (token == null || token.isEmpty()) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                return;
            }

            if (!jwtTokenUtils.validateToken(token)) {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                return;
            }
            Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
            token = token.substring("Bearer ".length() + JwtTokenUtils.preToken.length());
            String str = jwtTokenUtils.getRoleFromToken(token);

            String[] arr = str.split(",");
            Arrays.stream(arr).forEach(x -> authorities.add(new SimpleGrantedAuthority(x)));
            UsernamePasswordAuthenticationToken userToken = new UsernamePasswordAuthenticationToken(
                    jwtTokenUtils.getUsernameFromToken(token), null,
                    authorities);
            SecurityContextHolder.getContext().setAuthentication(userToken);
            filterChain.doFilter(request, response);

        }

    }

}
