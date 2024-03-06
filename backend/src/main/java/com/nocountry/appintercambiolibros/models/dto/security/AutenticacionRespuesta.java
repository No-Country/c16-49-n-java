package com.nocountry.appintercambiolibros.models.dto.security;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AutenticacionRespuesta {
    private String jwt;
}
