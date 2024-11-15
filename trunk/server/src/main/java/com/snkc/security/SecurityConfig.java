package com.snkc.security;

import com.snkc.security.filters.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.ArrayList;
import java.util.Collections;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig  {
    @Autowired
    JwtAuthenticationFilter jwtAuthenticationFilter;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/login").permitAll()
                        .requestMatchers("/reg").permitAll()
                        .requestMatchers("/getheadimg/**").permitAll()
                        .requestMatchers("/websocket").permitAll()
                        .requestMatchers("/charge/webhook").permitAll()
//                        .requestMatchers("/greeting").permitAll()
                        .requestMatchers("/**").hasRole("USER")//.authenticated()//. hasRole("USER")
                        .anyRequest().authenticated()
                )
                .cors(withDefaults())
                .csrf(csrf->csrf.disable())
                .httpBasic(withDefaults())
                ;
        http.addFilterBefore(jwtAuthenticationFilter, BasicAuthenticationFilter.class);
        return http.build();
    }

    @Autowired
    @Bean
    public CorsFilter corsFilter(UrlBasedCorsConfigurationSource corsConfigurationSource){
        return new CorsFilter(corsConfigurationSource);
    }

    @Bean
    public UrlBasedCorsConfigurationSource configurationSource() {
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedMethod(HttpMethod.POST);
        configuration.addAllowedMethod(HttpMethod.OPTIONS);
        configuration.addAllowedMethod(HttpMethod.GET);
        configuration.addAllowedOriginPattern(CorsConfiguration.ALL);
        configuration.addAllowedHeader(CorsConfiguration.ALL);
        configuration.setAllowedHeaders(Collections.singletonList("*"));
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",configuration);
        return urlBasedCorsConfigurationSource;
    }

}
