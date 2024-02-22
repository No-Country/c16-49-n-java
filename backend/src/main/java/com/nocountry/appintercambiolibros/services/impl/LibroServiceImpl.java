package com.nocountry.appintercambiolibros.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.GetLibro;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.repositories.LibroRepository;
import com.nocountry.appintercambiolibros.services.ImagenService;
import com.nocountry.appintercambiolibros.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LibroServiceImpl implements LibroService {

    @Autowired
    private LibroRepository libroRepository;

    @Autowired 
    private ImagenService imagenService;

    @Override
    public List<GetLibro> buscar(String isbn, String titulo, String autor) {
        BuscarLibroEspecificacion especificacion = new BuscarLibroEspecificacion(isbn, titulo, autor);
        List<Libro> librosEncontrados = libroRepository.findAll(especificacion);

        if(librosEncontrados.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return librosEncontrados.stream()
                .map(
                        libro -> new GetLibro(
                                libro.getIsbn(), libro.getTitulo(),
                                libro.getAutor(), libro.getFechaDePublicacion(),
                                libro.getResumen(), libro.getEditorial(),
                                libro.getPaginas(), libro.getGenero(),
                                libro.getNombreImagen()
                        )).collect(Collectors.toList());
    }

    @Override
    public Libro guardar(Libro libro) {
        return libroRepository.save(libro);
    }

    @Override
    public Libro guardar(Libro libro, MultipartFile imagen) {
        try {
            final String nombreImagen = this.imagenService.guardarImagen(imagen);
            libro.setNombreImagen(nombreImagen);
            return this.guardar(libro);
        } catch(Exception e) {
            return null;
        }
    }

    @Override
    public Libro fromJson(String json){
        ObjectMapper mapper = new ObjectMapper();
        try {
            Libro libro = mapper.readValue(json, Libro.class);
            return libro;
        } catch (Exception e){
            return null;
        }
    }

    @Override
    public List<Libro> findByGenero(String genero) {
        List<Libro> libros = libroRepository.findByGenero(genero);
        if(libros.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return libros;
    }
}
