package com.iot.learnigate.controller;

import com.iot.learnigate.dto.RegistrationRequestDto;
import com.iot.learnigate.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registration")
@AllArgsConstructor
public class RegistrationController {
    private final RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationRequestDto request){
        return registrationService.register(request);
    }

}
