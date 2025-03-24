package com.yourpillows.Services;

import com.yourpillows.DTO.UserDTO;
import com.yourpillows.Mapper.UserMapper;
import com.yourpillows.Models.User;
import com.yourpillows.Repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String registerUser(@Valid UserDTO userDto) {

        // Check if email already exists
        Optional<User> existingUser = userRepository.findByEmail(userDto.getEmail());
        if (existingUser.isPresent()) {
            return "Error: Email is al in gebruik, log in";
        }

        // Convert DTO to Entity
        User user = UserMapper.INSTANCE.toEntity(userDto);

        user.setName(userDto.getName());
        // Hash het wachtwoord vóór opslag
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        // Save user to the database
        userRepository.save(user);

        return "Registration successful!";
    }



    public UserDTO getUserByEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        return userOptional.map(UserMapper.INSTANCE::toDto).orElse(null);
    }

}
