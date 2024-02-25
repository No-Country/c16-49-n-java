package com.nocountry.appintercambiolibros.services;

import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

public interface LibroService {
    Page<LibroDTORespuesta> listarLibros(Pageable pageable);
    Page<LibroDTORespuesta> buscar(String isbn, String titulo, String autor, Pageable pageable);
    LibroDTORespuesta guardar(LibroDTOSolicitud libro, MultipartFile imagen);
    LibroDTORespuesta find(String id);
    List<LibroDTORespuesta> findByGenero(String genero, Pageable pageable);
}
