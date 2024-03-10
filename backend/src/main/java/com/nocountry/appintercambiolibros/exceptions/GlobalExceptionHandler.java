package com.nocountry.appintercambiolibros.exceptions;

import com.nocountry.appintercambiolibros.models.dto.ApiErrorRespuesta;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.net.URI;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;

@RestControllerAdvice
public class GlobalExceptionHandler extends ProblemDetail {

    @ExceptionHandler(RecursoNoEncontradoException.class)
    public ResponseEntity<?> handleBuscarLibroException(RecursoNoEncontradoException ex, HttpServletRequest request){
        ApiErrorRespuesta response = ApiErrorRespuesta.builder()
                .type("RecursoNoEncontradoException")
                .url(request.getRequestURL().toString())
                .method(request.getMethod())
                .message(ex.getMessage())
                .status(HttpStatus.NOT_FOUND.value())
                .timestamp(LocalDateTime.now())
                .error("Not Found")
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValidException(HttpServletRequest request, BindingResult result){
        Map<String, Object> errores = new HashMap<>();
        result.getFieldErrors().forEach( error ->{
            errores.put(error.getField(), "El campo " + error.getField() + " " + error.getDefaultMessage());
        });

        Map<String, Object> response = new HashMap<>();
        response.put("type", "MethodArgumentNotValidException");
        response.put("message", errores);
        response.put("url", request.getRequestURL());
        response.put("method", request.getMethod());
        response.put("status", HttpStatus.BAD_REQUEST);
        response.put("timestamp", LocalDateTime.now());
        response.put("error", "Bad Request");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<Object> handleMethodArgumentTypeMismatch(MethodArgumentTypeMismatchException ex, HttpServletRequest request) {

        String paramName = ex.getName();
        String expectedType = Objects.requireNonNull(ex.getRequiredType()).getSimpleName();

        String errorMessage = "Valor inválido para el parámetro '" + paramName + "'. Se esperaba un valor de tipo '" + expectedType + "'.";

        Map<String, Object> response = new HashMap<>();
        response.put("type", "MethodArgumentTypeMismatchException");
        response.put("message", errorMessage);
        response.put("url", request.getRequestURL());
        response.put("method", request.getMethod());
        response.put("status", HttpStatus.BAD_REQUEST);
        response.put("timestamp", LocalDateTime.now());
        response.put("error", "Bad Request");


        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    public ResponseEntity<?> handlerMethodNotAllowedException(HttpServletRequest request, HttpRequestMethodNotSupportedException ex) {
        ApiErrorRespuesta response = ApiErrorRespuesta.builder()
                .type("HttpRequestMethodNotSupportedException")
                .url(request.getRequestURL().toString())
                .method(request.getMethod())
                .message(ex.getMessage())
                .status(HttpStatus.NOT_FOUND.value())
                .timestamp(LocalDateTime.now())
                .error("Not Found")
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handlerGenericException(HttpServletRequest request, Exception ex) {
        ApiErrorRespuesta response = ApiErrorRespuesta.builder()
                .type("GenericException")
                .url(request.getRequestURL().toString())
                .method(request.getMethod())
                .message(ex.getMessage())
                .status(HttpStatus.NOT_FOUND.value())
                .timestamp(LocalDateTime.now())
                .error("Internal Server Error")
                .build();

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

}
