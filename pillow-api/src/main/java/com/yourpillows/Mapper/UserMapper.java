package com.yourpillows.Mapper;

import com.yourpillows.DTO.UserDTO;
import com.yourpillows.Models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    // Convert Entity to DTO
    UserDTO toDto(User user);

    // Convert DTO to Entity
    @Mapping(target = "id", ignore = true) // Zorg dat ID wordt genegeerd voor nieuwe gebruikers
    @Mapping(target = "createdAt", expression = "java(java.time.LocalDateTime.now())") // Automatische creatiedatum
    @Mapping(target = "password", source = "password") // Correct field name
    User toEntity(UserDTO userDto);
}

