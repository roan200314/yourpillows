package com.yourpillows.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOriginPatterns("https://*.example.com", "http://localhost:3000") // ✅ Allow requests from pattern and specific origin
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // ✅ Allow these HTTP methods
                        .allowedHeaders("*") // ✅ Allow all headers
                        .allowCredentials(true); // ✅ Allow cookies and authentication
            }
        };
    }
}
