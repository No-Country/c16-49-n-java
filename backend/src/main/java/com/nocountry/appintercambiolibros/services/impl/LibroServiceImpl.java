package com.nocountry.appintercambiolibros.services.impl;

import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.LibroDTOSolicitud;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.repositories.LibroRepository;
import com.nocountry.appintercambiolibros.repositories.ReseniaRepository;
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
    private ReseniaRepository reseniaRepository;

    @Autowired 
    private ImagenService imagenService;

    @Override
    public List<LibroDTORespuesta> listarLibros(){
        List<Libro> libros = libroRepository.findAll();
        return libros.stream().map(libro -> this.toDtoRespuesta(libro)).collect(Collectors.toList());
    }

    @Override
    public List<LibroDTORespuesta> buscar(String isbn, String titulo, String autor) {
        BuscarLibroEspecificacion especificacion = new BuscarLibroEspecificacion(isbn, titulo, autor);
        List<Libro> librosEncontrados = libroRepository.findAll(especificacion);

        if(librosEncontrados.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return librosEncontrados.stream()
                .map(libro -> this.toDtoRespuesta(libro)).collect(Collectors.toList());
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
    public LibroDTORespuesta find(Long idLibro){
        Libro libro = this.libroRepository.findById(idLibro).orElse(null);
        if(libro == null){
            return null;
        }
        return this.toDtoRespuesta(libro);
    }

    @Override
    public List<LibroDTORespuesta> findByGenero(String genero) {
        List<Libro> libros = libroRepository.findByGenero(genero);
        if(libros.isEmpty()){
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return libros.stream()
                .map( libroGuardado -> this.toDtoRespuesta(libroGuardado)).collect(Collectors.toList());
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

    @Override
    public List<GetReseniaDTO> getReseniasDeLibroId(Long idLibro) {
        Libro libro = this.libroRepository.findById(idLibro).orElseThrow();
        return this.reseniaRepository.findByLibro(libro);
    }
}
