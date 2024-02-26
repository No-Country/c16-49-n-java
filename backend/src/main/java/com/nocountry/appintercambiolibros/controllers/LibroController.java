package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.services.JsonService;
import com.nocountry.appintercambiolibros.services.LibroService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/libros")
@CrossOrigin(origins = "http://localhost:5173")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @Autowired 
    JsonService jsonService;

    @GetMapping()
    public List<LibroDTORespuesta> listarLibros() {
        return this.libroService.listarLibros();
    }

    @GetMapping("/{id}")
    public LibroDTORespuesta getLibro(@PathVariable Long id) {
        return this.libroService.find(id);
    }

    @GetMapping("/{id}/resenias")
    public List<GetReseniaDTO> getReseniasDeLibro(@PathVariable("id") Long id) {
        return this.libroService.getReseniasDeLibroId(id);
    }

    @PostMapping
    public ResponseEntity<?> guardarLibro(
        @RequestParam(name = "json") String libroDTOJson,
        @RequestParam(name = "imagen") MultipartFile imagen){
            LibroDTOSolicitud libro = this.jsonService.fromJson(libroDTOJson, LibroDTOSolicitud.class);
            if(libro == null){
                return ResponseEntity.badRequest().build();
            }

            LibroDTORespuesta libroRespuesta = libroService.guardar(libro, imagen);
            if(libroRespuesta == null){
                return ResponseEntity.internalServerError().build();
            }
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
