package com.nocountry.appintercambiolibros.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiErrorRespuesta {

    private String error;
    private String url;
    private String method;
    private int status;
    private String message;
    private LocalDateTime timestamp;
}
