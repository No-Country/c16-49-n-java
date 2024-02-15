package com.nocountry.appintercambiolibros.services.impl;

import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.exceptions.BuscarLibroException;
import com.nocountry.appintercambiolibros.models.dto.GetLibro;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.repositories.LibroRepository;
import com.nocountry.appintercambiolibros.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LibroServiceImpl implements LibroService {

    @Autowired
    private LibroRepository libroRepository;

    @Override
    public List<GetLibro> buscar(BuscarLibroEspecificacion especificacion) {
        List<Libro> librosEncontrados = libroRepository.findAll(especificacion);

        if(librosEncontrados.isEmpty()){
            throw new BuscarLibroException("No se encontraron resultados");
        }
        return librosEncontrados.stream()
                .map(
                        libro -> new GetLibro(
                                libro.getIsbn(), libro.getTitulo(),
                                libro.getAutor(), libro.getFechaDePublicacion(),
                                libro.getResumen(), libro.getEditorial(),
                                libro.getPaginas(), libro.getGenero()
                        )).collect(Collectors.toList());
    }

    @Override
    public Libro guardar(Libro libro) {
        return libroRepository.save(libro);
    }
}
