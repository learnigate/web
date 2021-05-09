package com.iot.learnigate.service;


import com.iot.learnigate.dto.RegistrationRequestDto;
import com.iot.learnigate.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserService userService;

    public String register(RegistrationRequestDto request) {
        String token = userService.signUpUser(
                new User(
                        request.getUsername(),
                        request.getPassword(),
                        request.getEmail()

                )
        );
        return token;
    }

}

