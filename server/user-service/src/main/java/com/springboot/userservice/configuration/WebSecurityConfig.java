package com.springboot.userservice.configuration;

import java.util.List;

import com.springboot.userservice.filter.JwtAuthenticationFilter;
import com.springboot.userservice.filter.UserAuthorizationFilter;
import com.springboot.userservice.services.UserService;
import com.springboot.userservice.utils.ConfigUtils;
import com.springboot.userservice.utils.JwtTokenUtils;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import lombok.RequiredArgsConstructor;
import lombok.var;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserService userService;

    private final UserDetailsService userDetailsService;

    // tell spring how to look for users and check passwords
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(ConfigUtils.passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().configurationSource(request -> {
            var cors = new CorsConfiguration();
            cors.setAllowedOrigins(List.of("http://localhost:3000"));
            cors.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
            cors.setAllowedHeaders(List.of("*"));
            return cors;
        });
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.authorizeRequests().antMatchers("/login").permitAll();
        // .and().formLogin()
        // .loginProcessingUrl("/api/v1/login");

        // only allow authenticated users to access the rest of the application
        http.authorizeRequests()
                .antMatchers("/api/users/**")
                .hasAnyAuthority("ROLE_ADMIN");
        http.authorizeRequests().anyRequest().authenticated();

        // apply filter for authentication and authorization
        JwtTokenUtils tokenUtils = new JwtTokenUtils();
        JwtAuthenticationFilter filter = new JwtAuthenticationFilter(userService, authenticationManagerBean(),
                tokenUtils);
        // filter.setFilterProcessesUrl("/api/v1/login");
        http.addFilter(filter);
        http.addFilterBefore(new UserAuthorizationFilter(tokenUtils),
                UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}
