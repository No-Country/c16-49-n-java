package com.nocountry.appintercambiolibros.services;

import com.nocountry.appintercambiolibros.models.dto.*;
import com.nocountry.appintercambiolibros.models.entity.Libro;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface LibroService {
    Page<LibroDTORespuesta> listarLibros(Pageable pageable);
    Page<LibroDTORespuesta> buscar(String isbn, String titulo, String autor, Pageable pageable);
    LibroDTORespuesta guardar(LibroDTOSolicitud libro, MultipartFile imagen);
    Page<LibroDTORespuesta> findByGenero(String genero, Pageable pageable);
    LibroDTORespuesta find(Long libroId);
    Libro findLibro(Long libroId);
    List<GetReseniaDTO> getReseniasDeLibroId(Long id);
    void agregarComentario(ComentarioDTOSolicitud comentarioSolicitud, Long usuarioId, Long libroId);
    void eliminarComentario(Long usuarioId, Long comentarioId);
    void actualizarComentario(Long usuarioId,Long comentarioId, ComentarioDTOSolicitud comentarioSolicitud);
    List<ComentarioDTORespuesta> comentariosPorLibro(Long libroId);
    UsuarioDTO getUsuarioDTODeLibrodId(Long idLibro);

}
