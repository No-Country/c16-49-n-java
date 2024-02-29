package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.ComentarioDTOSolicitud;
import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.services.JsonService;
import com.nocountry.appintercambiolibros.services.LibroService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.Valid;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@RequestMapping("api/v1/libros")
@CrossOrigin(origins = "http://localhost:5173")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @Autowired 
    JsonService jsonService;

    @Operation(summary = "Obtener todos lo libros paginados")
    @GetMapping()
    public ResponseEntity<?> listarLibros(@ParameterObject @Parameter(hidden = true) Pageable pageable) {
        return ResponseEntity.ok(libroService.listarLibros(pageable));
    }
    @Operation(summary = "Obtener libro por Id")
    @GetMapping("/{id}")
    public LibroDTORespuesta getLibro(@PathVariable Long id) {
        return this.libroService.find(id);
    }

    @GetMapping("/{id}/resenias")
    public List<GetReseniaDTO> getReseniasDeLibro(@PathVariable("id") Long id) {
        return this.libroService.getReseniasDeLibroId(id);
    }

    @Operation(summary = "Guarda un libro con imagen")
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

    @Operation(summary = "Obtener una lista de libros paginados, filtrados por isbn, titulo, autor")
    @GetMapping("/buscar")
    public ResponseEntity<?> buscar(@RequestParam(required = false) String isbn,
                                    @RequestParam(required = false) String titulo,
                                    @RequestParam(required = false) String autor,
                                   @ParameterObject @Parameter(hidden = true) Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(libroService.buscar(isbn,titulo, autor, pageable));
    }

    @Operation(summary = "Obtener una lista de libros paginados por género")
    @GetMapping("/genero/{genero}")
    public ResponseEntity<?> buscarGenero(@PathVariable String genero, @ParameterObject @Parameter(hidden = true) Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(libroService.findByGenero(genero,pageable));
    }
    @Operation(summary = "Agregar comentario a un libro")
    @PostMapping("usuario/{usuarioId}/libro/{libroId}/agregar-comentario")
    public ResponseEntity<?> agregarComentario(@Valid @RequestBody ComentarioDTOSolicitud comentarioSolicitud, @PathVariable Long usuarioId, @PathVariable Long libroId){
        libroService.agregarComentario(comentarioSolicitud,usuarioId,libroId);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @Operation(summary = "Eliminar comentario de un libro")
    @DeleteMapping("usuario/{usuarioId}/libro/eliminar-comentario/{comentarioId}")
    public ResponseEntity<?> eliminarComentario(
            @PathVariable Long usuarioId, @PathVariable Long comentarioId){
        libroService.eliminarComentario(usuarioId,comentarioId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Operation(summary = "Actualizar comentario")
    @PutMapping("usuario/{usuarioId}/comentario/{comentarioId}")
    public ResponseEntity<?> actualizarComentario(@PathVariable Long usuarioId,
                                                  @PathVariable Long comentarioId,
                                                  @RequestBody ComentarioDTOSolicitud comentarioSolicitud){
        libroService.actualizarComentario(usuarioId,comentarioId,comentarioSolicitud);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @Operation(summary = "Obtener comentarios de un libro por su id")
    @GetMapping("comentarios/libro/{libroId}")
    public ResponseEntity<?> buscarComentariosPorLibro(@PathVariable Long libroId){
        return ResponseEntity.ok(libroService.comentariosPorLibro(libroId));
    }

}
