package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.models.dto.GetLibro;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/libros")
@CrossOrigin(origins = "http://localhost:5173")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @PostMapping
    public ResponseEntity<?> guardarLibro(
        @RequestParam String libroJson,
        @RequestParam MultipartFile imagen){
            Libro libro = this.libroService.fromJson(libroJson);
            libro = libroService.guardar(libro, imagen);
            if(libro == null){
                return ResponseEntity.internalServerError().build();
            }
            // return ResponseEntity.ok("Todo en orden");
            return ResponseEntity.status(HttpStatus.CREATED).body(libro);
    }

    @GetMapping("/buscar")
    public ResponseEntity<?> buscar(@RequestParam(required = false) String isbn,
                                    @RequestParam(required = false) String titulo,
                                    @RequestParam(required = false) String autor){
        return ResponseEntity.status(HttpStatus.OK).body(libroService.buscar(isbn,titulo, autor));
    }

    @GetMapping("/genero/{genero}")
    public ResponseEntity<?> buscarGenero(@PathVariable String genero){
        return ResponseEntity.status(HttpStatus.OK).body(libroService.findByGenero(genero));
    }


}
