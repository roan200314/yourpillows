package com.yourpillows.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3003")  // Voeg de frontend toe
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Sta methoden toe
                .allowCredentials(true); // Voor cookies en headers
    }
}
