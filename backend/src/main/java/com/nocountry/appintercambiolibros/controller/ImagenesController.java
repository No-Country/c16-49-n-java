package com.nocountry.appintercambiolibros.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.appintercambiolibros.services.ImagenService;

@RestController()
@RequestMapping("api/imagen")
public class ImagenesController {

    @Autowired 
    ImagenService imagenService;

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

    @PostMapping("/guardar")
    public ResponseEntity<?> guardarImagen(@RequestParam MultipartFile file){
        try {
            this.imagenService.guardarImagen(file);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
