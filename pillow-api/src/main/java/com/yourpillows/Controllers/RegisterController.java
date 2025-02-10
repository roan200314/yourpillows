package com.yourpillows.Controllers;

import com.yourpillows.DTO.UserDTO;
import com.yourpillows.Services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private UserService userService;

    @PostMapping
    public String register(@Valid @RequestBody UserDTO userDto) {
        return userService.registerUser(userDto);
    }
}
