package com.nocountry.appintercambiolibros.services;

import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface LibroService {
    List<LibroDTORespuesta> listarLibros();
    List<LibroDTORespuesta> buscar(String isbn, String titulo, String autor);
    LibroDTORespuesta guardar(LibroDTOSolicitud libro, MultipartFile imagen);
    LibroDTORespuesta find(Long id);
    List<LibroDTORespuesta> findByGenero(String genero);
    List<GetReseniaDTO> getReseniasDeLibroId(Long id);
}
