package com.nocountry.appintercambiolibros.controllers;

import java.io.IOException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.appintercambiolibros.services.impl.ImagenServiceImpl;
@ApiResponses(value = {
        @ApiResponse(responseCode= "200", description = "Operación exitosa"),
        @ApiResponse(responseCode= "203", description = "Operación de creación"),
        @ApiResponse(responseCode = "404", description = "No encontrado"),
        @ApiResponse(responseCode = "500", description = "Error interno del servidor")
})
@RestController()
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/imagenes")
public class ImagenController {

    @Autowired
    ImagenServiceImpl imagenService;
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Obtener imagen de usuario")
    @GetMapping("/{filename}")
    public ResponseEntity<?> descargarImagen(@PathVariable("filename") String filename) throws IOException {
        try {
            byte[] imagen = this.imagenService.obtenerImagen(filename);
            return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/jpeg"))
                .body(imagen);
        }
        catch (Exception e ){
            return ResponseEntity.notFound().build();
        }
    }
    
}
