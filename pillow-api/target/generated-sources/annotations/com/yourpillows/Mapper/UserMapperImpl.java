package com.yourpillows.Mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-10T22:14:57+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.12 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public SecurityProperties.User toDto(SecurityProperties.User user) {
        if ( user == null ) {
            return null;
        }

        SecurityProperties.User user1 = new SecurityProperties.User();

        user1.setName( user.getName() );
        user1.setPassword( user.getPassword() );
        List<String> list = user.getRoles();
        if ( list != null ) {
            user1.setRoles( new ArrayList<String>( list ) );
        }

        return user1;
    }

    @Override
    public SecurityProperties.User toEntity(SecurityProperties.User userDto) {
        if ( userDto == null ) {
            return null;
        }

        SecurityProperties.User user = new SecurityProperties.User();

        user.setName( userDto.getName() );
        user.setPassword( userDto.getPassword() );
        List<String> list = userDto.getRoles();
        if ( list != null ) {
            user.setRoles( new ArrayList<String>( list ) );
        }

        return user;
    }
}
