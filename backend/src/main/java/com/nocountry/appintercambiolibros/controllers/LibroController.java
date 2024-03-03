package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.ComentarioDTOSolicitud;
import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.models.dto.ReseniaDTO;
import com.nocountry.appintercambiolibros.models.dto.UsuarioDTO;
import com.nocountry.appintercambiolibros.services.JsonService;
import com.nocountry.appintercambiolibros.services.LibroService;
import com.nocountry.appintercambiolibros.services.ReseniaService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@SecurityRequirement(name = "bearerAuth")
@RestController
@RequestMapping("api/v1/libros")
@CrossOrigin(origins = "http://localhost:5173")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @Autowired
    private ReseniaService reseniaService;

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

    @Operation(summary = "Obtener libro por Id")
    @GetMapping("/{id}/resenias")
    public List<GetReseniaDTO> getReseniasDeLibro(@PathVariable("id") Long id) {
        return this.libroService.getReseniasDeLibroId(id);
    }

    @Operation(summary = "Obtener el promedio de reseña de un libro")
    @GetMapping("/{id}/resenias/promedio")
    public ResponseEntity<?> getPromedioReseniaLibro(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(this.reseniaService.getPromedioReseniasDeLibroId(id));
    }

    @Operation( summary = "Registrar una reseña nueva por un usuario y libro especifico")
    @PostMapping("/usuario/{usuarioId}/libro/{libroId}/agregar-resenia")
    public ResponseEntity<?> agregarResenia(
        @PathVariable("usuarioId") Long idUsuario,
        @PathVariable("libroId") Long isLibro,
        @RequestBody ReseniaDTO dataResenia
    ) {
        ReseniaDTO nuevo = this.reseniaService.registrarResenia(isLibro, idUsuario, dataResenia);
        if (nuevo == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }

    @Operation( summary = "Edita una reseña de un usuario sobre un libro")
    @PutMapping("/usuario/{usuarioId}/libro/{libroId}/editar-resenia")
    public ResponseEntity<?> editarResenia(
        @PathVariable("usuarioId") Long idUsuario,
        @PathVariable("libroId") Long isLibro,
        @RequestBody ReseniaDTO dataResenia
    ) {
        ReseniaDTO nuevo = this.reseniaService.editarResenia(isLibro, idUsuario, dataResenia);
        if (nuevo == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }

    @Operation( summary = "Eliminar la reseña por id")
    @DeleteMapping("/resenias/eliminar-resenia/{id}")
    public ResponseEntity<?> eliminarResenia(
        @PathVariable("id") Long idResenia
    ) {
        if (!this.reseniaService.eliminarResenia(idResenia)){
            return ResponseEntity.internalServerError().build();
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Operation( summary = "Obtener el usuario de un libro por su id")
    @GetMapping("/{id}/usuario")
    public UsuarioDTO getUsuarioLibroId(@PathVariable("id") Long idLibro) {
        return this.libroService.getUsuarioDTODeLibrodId(idLibro);
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
    @GetMapping("buscar/libro")
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
    @PostMapping("/usuario/{usuarioId}/libro/{libroId}/agregar-comentario")
    public ResponseEntity<?> agregarComentario(@Valid @RequestBody ComentarioDTOSolicitud comentarioSolicitud, @PathVariable Long usuarioId, @PathVariable Long libroId){
        libroService.agregarComentario(comentarioSolicitud,usuarioId,libroId);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @Operation(summary = "Eliminar comentario de un libro")
    @DeleteMapping("/usuario/{usuarioId}/libro/eliminar-comentario/{comentarioId}")
    public ResponseEntity<?> eliminarComentario(
            @PathVariable Long usuarioId, @PathVariable Long comentarioId){
        libroService.eliminarComentario(usuarioId,comentarioId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @Operation(summary = "Actualizar comentario")
    @PutMapping("/usuario/{usuarioId}/comentario/{comentarioId}")
    public ResponseEntity<?> actualizarComentario(@PathVariable Long usuarioId,
                                                  @PathVariable Long comentarioId,
                                                  @RequestBody ComentarioDTOSolicitud comentarioSolicitud){
        libroService.actualizarComentario(usuarioId,comentarioId,comentarioSolicitud);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @Operation(summary = "Obtener comentarios de un libro por su id")
    @GetMapping("/comentarios/libro/{libroId}")
    public ResponseEntity<?> buscarComentariosPorLibro(@PathVariable Long libroId){
        return ResponseEntity.ok(libroService.comentariosPorLibro(libroId));
    }

}
