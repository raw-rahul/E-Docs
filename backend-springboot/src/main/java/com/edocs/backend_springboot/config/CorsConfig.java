//package com.edocs.backend_springboot.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.*;
//
//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedOriginPatterns("*") // The "Modern" version of *
//                        .allowedMethods("*")
//                        .allowedHeaders("*")
//                        .allowCredentials(true); // Allows cookies/auth headers
//            }
//        };
//    }
//}