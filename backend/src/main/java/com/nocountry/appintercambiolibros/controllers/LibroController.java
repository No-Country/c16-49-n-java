package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.services.LibroService;
import com.nocountry.appintercambiolibros.services.impl.JsonServiceImpl;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/libros")
@CrossOrigin(origins = "http://localhost:5173")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @Autowired JsonServiceImpl jsonService;

    @PostMapping
    public ResponseEntity<?> guardarLibro(
        @RequestParam String libroDTOJson,
        @RequestParam MultipartFile imagen){
            LibroDTOSolicitud libro = this.jsonService.fromJson(libroDTOJson, LibroDTOSolicitud.class);

            // TODO: Sacar o estandarizar la validacion
            if(libro == null){
                return ResponseEntity.badRequest().build();
            }

            // libro = libroService.guardar(libro, imagen);
            // if(libro == null){
            //     return ResponseEntity.internalServerError().build();
            // }
            // return ResponseEntity.ok("Todo en orden");
            return ResponseEntity.status(HttpStatus.CREATED).body(libro);
    }

    // public ResponseEntity<?> guardarLibro(@Valid @RequestBody LibroDTOSolicitud libroRequest){
    //     return ResponseEntity.status(HttpStatus.CREATED).body(libroService.guardar(libroRequest));
    //}
    // TODO: JWT sesiones investigar

    // TODO: promedio de calificacion de libro
    // TODO: Lista de calificaciones hechas por cada usuario
    // TODO: editar una calificacion de usuario
    
    // TODO: checar pathvariable no es necesaria
    // TODO: ver de paginar este endpoint
    // @GetMapping("/buscar/{pagina}")
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
