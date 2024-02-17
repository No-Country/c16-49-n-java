package com.nocountry.appintercambiolibros.services;

import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.models.dto.GetLibro;
import com.nocountry.appintercambiolibros.models.entity.Libro;

import java.util.List;

public interface LibroService {
    List<GetLibro> buscar(String isbn, String titulo, String autor );

    Libro guardar(Libro libro);
    List<Libro> findByGenero(String genero);
}
