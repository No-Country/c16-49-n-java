package com.nocountry.appintercambiolibros.exceptions;

import com.nocountry.appintercambiolibros.models.dto.ApiErrorRespuesta;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RecursoNoEncontradoException.class)
    public ResponseEntity<?> handleBuscarLibroException(RecursoNoEncontradoException ex, HttpServletRequest request){
        ApiErrorRespuesta response = ApiErrorRespuesta.builder()
                .error("RecursoNoEncontradoException")
                .url(request.getRequestURL().toString())
                .method(request.getMethod())
                .message(ex.getMessage())
                .status(HttpStatus.NOT_FOUND.value())
                .timestamp(LocalDateTime.now())
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValidException(HttpServletRequest request, BindingResult result){
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach( error ->{
            errores.put(error.getField(), "El campo " + error.getField() + " " + error.getDefaultMessage());
        });

        Map<String, Object> errors = new HashMap<>();
        errors.put("type", "MethodArgumentNotValidException");
        errors.put("errors", errores);
        errors.put("url", request.getRequestURL());
        errors.put("method", request.getMethod());
        errors.put("status", HttpStatus.BAD_REQUEST);
        errors.put("timestamp", LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

}
