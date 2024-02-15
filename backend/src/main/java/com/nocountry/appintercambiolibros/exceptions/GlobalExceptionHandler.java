package com.nocountry.appintercambiolibros.exceptions;

import com.nocountry.appintercambiolibros.models.dto.ApiErrorRespuesta;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BuscarLibroException.class)
    public ResponseEntity<?> handleBuscarLibroException(BuscarLibroException ex, HttpServletRequest request){
        ApiErrorRespuesta response = ApiErrorRespuesta.builder()
                .error("BuscarLibroException")
                .url(request.getRequestURL().toString())
                .method(request.getMethod())
                .message(ex.getMessage())
                .status(HttpStatus.NOT_FOUND.value())
                .timestamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
}
