package com.nocountry.appintercambiolibros.services.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
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
    public List<LibroDTORespuesta> buscar(String isbn, String titulo, String autor) {
        BuscarLibroEspecificacion especificacion = new BuscarLibroEspecificacion(isbn, titulo, autor);
        List<Libro> librosEncontrados = libroRepository.findAll(especificacion);

        if(librosEncontrados.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return librosEncontrados.stream()
                .map(
                        libro -> new LibroDTORespuesta(
                                libro.getId().toString(),
                                libro.getIsbn(), libro.getTitulo(),
                                libro.getAutor(), libro.getFechaDePublicacion(),
                                libro.getResumen(), libro.getEditorial(),
                                libro.getPaginas(), libro.getGenero(),
                                libro.getNombreImagen(),
                                libro.getEstado().toString()
                        )).collect(Collectors.toList());
    }

    @Override
    public LibroDTORespuesta guardar(LibroDTOSolicitud libroSolicitud) {
        Libro libroGuardado = libroRepository.save(Libro.builder()
                .isbn(libroSolicitud.getIsbn())
                .titulo(libroSolicitud.getTitulo())
                .autor(libroSolicitud.getAutor())
                .fechaDePublicacion(libroSolicitud.getFechaDePublicacion())
                .resumen(libroSolicitud.getResumen())
                .editorial(libroSolicitud.getEditorial())
                .paginas(String.valueOf(libroSolicitud.getPaginas()))
                .genero(libroSolicitud.getGenero())
                .estado(Libro.LibroEstado.valueOf(libroSolicitud.getEstado().toUpperCase()))
                .build());
        return LibroDTORespuesta.builder()
                .id(libroGuardado.getId().toString())
                .isbn(libroGuardado.getIsbn())
                .titulo(libroGuardado.getTitulo())
                .autor(libroGuardado.getAutor())
                .fechaDePublicacion(libroGuardado.getFechaDePublicacion())
                .resumen(libroGuardado.getResumen())
                .editorial(libroGuardado.getEditorial())
                .paginas(libroGuardado.getPaginas())
                .genero(libroGuardado.getGenero())
                .estado(libroGuardado.getEstado().toString())
                .build();
    }

    @Override
    public Libro guardar(Libro libro){
        return this.libroRepository.save(libro);
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
    public List<LibroDTORespuesta> findByGenero(String genero) {
        List<Libro> libros = libroRepository.findByGenero(genero);
        if(libros.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return libros.stream()
                .map( libroGuardado -> {
                    LibroDTORespuesta libroDTO = new LibroDTORespuesta();
                    libroDTO.setId(libroGuardado.getId().toString());
                    libroDTO.setIsbn(libroGuardado.getIsbn());
                    libroDTO.setTitulo(libroGuardado.getTitulo());
                    libroDTO.setAutor(libroGuardado.getAutor());
                    libroDTO.setFechaDePublicacion(libroGuardado.getFechaDePublicacion());
                    libroDTO.setResumen(libroGuardado.getResumen());
                    libroDTO.setEditorial(libroGuardado.getEditorial());
                    libroDTO.setPaginas(libroGuardado.getPaginas());
                    libroDTO.setGenero(libroGuardado.getGenero());
                    libroDTO.setEstado(libroGuardado.getEstado().toString());
                    return libroDTO;
                }).collect(Collectors.toList());
    }
}
