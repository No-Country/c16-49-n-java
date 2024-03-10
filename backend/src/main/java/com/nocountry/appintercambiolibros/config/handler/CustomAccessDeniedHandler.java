package com.nocountry.appintercambiolibros.config.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nocountry.appintercambiolibros.models.dto.ApiErrorRespuesta;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException{

        ApiErrorRespuesta responseError = ApiErrorRespuesta.builder()
                .type("AccessDeniedHandler")
                .url(request.getRequestURL().toString())
                .method(request.getMethod())
                .message("Acceso denegado. No tienes los permisos necesarios para acceder a este recurso." +
                        " Por favor contacta al administrador si crees que es un error")
                .status(HttpStatus.FORBIDDEN.value())
                .timestamp(LocalDateTime.now())
                .error("Forbidden")
                .build();

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());

        String apiErrorAsJson = objectMapper.writeValueAsString(responseError);

        response.getWriter().write(apiErrorAsJson);

    }
}
