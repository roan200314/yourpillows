package com.yourpillows.Controllers;

import com.yourpillows.DTO.UserDTO;
import com.yourpillows.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080") // Vue app
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody UserDTO loginDto) {
        try {
            String token = userService.loginUser(loginDto);
            if (token == null) {
                return "Ongeldig e-mailadres of wachtwoord.";
            }
            return token;
        } catch (Exception e) {
            e.printStackTrace();
            return "Fout tijdens het inloggen.";
        }
    }
}
