package com.yourpillows.Controllers;

import com.yourpillows.DTO.UserDTO;
import com.yourpillows.Services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080")
public class RegisterController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@Valid @RequestBody UserDTO userDto) {
        try {
            return userService.registerUser(userDto);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception for better debugging
            return "Error occurred while registering.";
        }
    }


}
