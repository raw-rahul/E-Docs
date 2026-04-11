package com.edocs.backend_springboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // 1. Hook into the CORS configuration below
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))

                // 2. Disable CSRF for your REST APIs
                .csrf(csrf -> csrf.disable())

                // 3. Permit all requests (so you don't get 403 Forbidden)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // Allows your Vite frontend (localhost:5173) and any other origin
        configuration.setAllowedOriginPatterns(List.of("*"));

        // Allows all HTTP methods (GET, POST, etc.)
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // Allows all headers (Authorization, Content-Type, etc.)
        configuration.setAllowedHeaders(List.of("*"));

        // Required if you want to send cookies or Auth headers from React
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}