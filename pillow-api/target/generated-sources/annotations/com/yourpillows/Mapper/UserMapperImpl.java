package com.yourpillows.Mapper;

import com.yourpillows.DTO.UserDTO;
import com.yourpillows.Models.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-10T23:26:10+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.2 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO toDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setId( user.getId() );
        userDTO.setName( user.getName() );
        userDTO.setEmail( user.getEmail() );
        userDTO.setPassword( user.getPassword() );
        userDTO.setCreatedAt( user.getCreatedAt() );

        return userDTO;
    }

    @Override
    public User toEntity(UserDTO userDto) {
        if ( userDto == null ) {
            return null;
        }

        User user = new User();

        user.setPassword( userDto.getPassword() );
        user.setName( userDto.getName() );
        user.setEmail( userDto.getEmail() );

        user.setCreatedAt( java.time.LocalDateTime.now() );

        return user;
    }
}
