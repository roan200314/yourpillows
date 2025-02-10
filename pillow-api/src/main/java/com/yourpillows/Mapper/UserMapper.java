package com.yourpillows.Mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
    
    User toDto(User user);
    
    User toEntity(User userDto);
}


