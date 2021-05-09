package com.iot.learnigate.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode
public class RegistrationRequestDto {
    private String username;
    private String password;
    private String email;
}
