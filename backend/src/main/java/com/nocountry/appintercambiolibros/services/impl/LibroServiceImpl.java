package com.nocountry.appintercambiolibros.services.impl;

import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.repositories.LibroRepository;
import com.nocountry.appintercambiolibros.services.ImagenService;
import com.nocountry.appintercambiolibros.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
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
    public Page<LibroDTORespuesta> listarLibros(Pageable pageable){
        Page<Libro> libros = libroRepository.findAll(pageable);
        if(!libros.hasContent()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return libros.map(this::toDtoRespuesta);
    }

    @Override
    public Page<LibroDTORespuesta> buscar(String isbn, String titulo, String autor, Pageable pageable) {
        BuscarLibroEspecificacion especificacion = new BuscarLibroEspecificacion(isbn, titulo, autor);
        Page<Libro> librosEncontrados = libroRepository.findAll(especificacion, pageable);

        if(librosEncontrados.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }

        return librosEncontrados.map(this::toDtoRespuesta);
    }

    @Override
    public LibroDTORespuesta guardar(LibroDTOSolicitud libroSolicitud, MultipartFile imagen) {
        final String nombreImagen =  this.imagenService.guardarImagen(imagen);
        if (nombreImagen == null){
            return null;
        }

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
                .nombreImagen(nombreImagen)
                .build());

        return this.toDtoRespuesta(libroGuardado);
    }

    @Override
    public LibroDTORespuesta find(String id){
        Libro libro = this.libroRepository.findById(Long.valueOf(id)).orElse(null);
        if(libro == null){
            return null;
        }
        return this.toDtoRespuesta(libro);

    }

    @Override
    public Page<LibroDTORespuesta> findByGenero(String genero, Pageable pageable) {
        List<Libro> libros = libroRepository.findByGenero(genero);
        if(libros.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }

        int start = (int) pageable.getOffset();
        int end = Math.min((start + pageable.getPageSize()), libros.size());

        List<LibroDTORespuesta> librosDTO = libros.subList(start, end).stream()
                .map(this::toDtoRespuesta)
                .collect(Collectors.toList());

        return new PageImpl<>(librosDTO, pageable, libros.size());

    }


    private LibroDTORespuesta toDtoRespuesta( Libro libro){
        return LibroDTORespuesta.builder()
            .id(libro.getId().toString())
            .isbn(libro.getIsbn())
            .titulo(libro.getTitulo())
            .autor(libro.getAutor())
            .fechaDePublicacion(libro.getFechaDePublicacion())
            .resumen(libro.getResumen())
            .editorial(libro.getEditorial())
            .paginas(libro.getPaginas())
            .genero(libro.getGenero())
            .estado(libro.getEstado().toString())
            .nombreImagen(libro.getNombreImagen())
            .build();
    }
}
