package com.nocountry.appintercambiolibros.services;

import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.models.entity.Libro;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface LibroService {
    // List<GetLibro> buscar(String isbn, String titulo, String autor );
    List<LibroDTORespuesta> buscar(String isbn, String titulo, String autor);
    Libro fromJson(String json);
    Libro guardar(Libro libro);
    Libro guardar(Libro libro, MultipartFile imagen);
    // List<Libro> findByGenero(String genero);
    List<LibroDTORespuesta> findByGenero(String genero);
    LibroDTORespuesta guardar(LibroDTOSolicitud libroSolicitud);
}
