package com.nocountry.appintercambiolibros.services.impl;

import com.nocountry.appintercambiolibros.especificacion.BuscarLibroEspecificacion;
import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.*;
import com.nocountry.appintercambiolibros.models.entity.Comentario;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.models.entity.Usuario;
import com.nocountry.appintercambiolibros.repositories.ComentarioRepository;
import com.nocountry.appintercambiolibros.repositories.LibroRepository;
import com.nocountry.appintercambiolibros.repositories.ReseniaRepository;
import com.nocountry.appintercambiolibros.repositories.UsuarioRepository;
import com.nocountry.appintercambiolibros.services.ImagenService;
import com.nocountry.appintercambiolibros.services.LibroService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ComentarioRepository comentarioRepository;

    @Autowired
    private ImagenService imagenService;

    @Override
    public Page<LibroDTORespuesta> listarLibros(Pageable pageable) {
        Page<Libro> libros = libroRepository.findAll(pageable);
        if (!libros.hasContent()) {
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }
        return libros.map(this::toDtoRespuesta);
    }

    @Override
    public Page<LibroDTORespuesta> buscar(String isbn, String titulo, String autor, Pageable pageable) {
        BuscarLibroEspecificacion especificacion = new BuscarLibroEspecificacion(isbn, titulo, autor);
        Page<Libro> librosEncontrados = libroRepository.findAll(especificacion, pageable);

        if (librosEncontrados.isEmpty()) {
            throw new RecursoNoEncontradoException("No se encontraron resultados");
        }

        return librosEncontrados.map(this::toDtoRespuesta);
    }

    @Override
    public LibroDTORespuesta guardar(LibroDTOSolicitud libroSolicitud, MultipartFile imagen) {
        final String nombreImagen = this.imagenService.guardarImagen(imagen);
        if (nombreImagen == null) {
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
    public LibroDTORespuesta find(Long libroId) {
        Libro libro = libroRepository.findById(libroId)
                .orElseThrow( ()-> new RecursoNoEncontradoException("Libro no encontrado con el id: " + libroId));

            return this.toDtoRespuesta(libro);

        }

    @Override
        public Page<LibroDTORespuesta> findByGenero(String genero, Pageable pageable){
            List<Libro> libros = libroRepository.findByGenero(genero);
            if (libros.isEmpty()) {
                throw new RecursoNoEncontradoException("No se encontraron resultados");
            }

            int start = (int) pageable.getOffset();
            int end = Math.min((start + pageable.getPageSize()), libros.size());

            List<LibroDTORespuesta> librosDTO = libros.subList(start, end).stream()
                    .map(this::toDtoRespuesta)
                    .collect(Collectors.toList());

            return new PageImpl<>(librosDTO, pageable, libros.size());

        }


        public LibroDTORespuesta toDtoRespuesta (Libro libro){
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
        public List<GetReseniaDTO> getReseniasDeLibroId (Long idLibro){
            Libro libro = this.libroRepository.findById(idLibro).orElseThrow();
            return this.reseniaRepository.findByLibro(libro);
        }
    @Transactional
    @Override
    public void agregarComentario(ComentarioDTOSolicitud comentarioSolicitud, Long usuarioId, Long libroId) {
        System.out.println(comentarioSolicitud.getContenido());
        Usuario usuarioBD = usuarioRepository.findById(usuarioId)
                .orElseThrow( ()-> new RecursoNoEncontradoException("Usuario no encontrado con el id: " + usuarioId));

        Libro libroBD = libroRepository.findById(libroId)
                .orElseThrow( ()-> new RecursoNoEncontradoException("Libro no encontrado con el id: " + libroId));;

        Comentario comentario = comentarioRepository.save(Comentario.builder()
                .contenido(comentarioSolicitud.getContenido())
                .build());

        usuarioBD.addComentario(comentario);
        libroBD.addComentario(comentario);
        usuarioRepository.save(usuarioBD);
        libroRepository.save(libroBD);


    }
    @Transactional
    @Override
    public void eliminarComentario(Long usuarioId, Long comentarioId) {
        Usuario usuarioBD = usuarioRepository.findById(usuarioId)
                .orElseThrow( () -> new RecursoNoEncontradoException("Usuario no encontrado con el id: " + usuarioId));

        Comentario comentarioBD = usuarioBD.getComentarios().stream()
                .filter(comentario -> comentario.getId().equals(comentarioId))
                .findFirst()
                .orElseThrow(
                        () -> new RecursoNoEncontradoException(
                                "El comentario con el id: " + comentarioId + " no pertenece al usuario con el id: " + usuarioId));

        usuarioBD.removeComentario(comentarioBD);
        usuarioRepository.save(usuarioBD);

    }

    @Transactional
    @Override
    public void actualizarComentario(Long usuarioId, Long comentarioId, ComentarioDTOSolicitud comentarioSolicitud) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow( () -> new RecursoNoEncontradoException("Usuario no encontrado con el id: " + usuarioId));

        Comentario comentarioBD = usuario.getComentarios().stream()
                .filter(comentario -> comentario.getId().equals(comentarioId))
                .findFirst()
                .orElseThrow(
                        () -> new RecursoNoEncontradoException(
                                "El comentario con el id: " + comentarioId + " no pertenece al usuario con el id: " + usuarioId));

        comentarioBD.setId(comentarioId);
        comentarioBD.setContenido(comentarioSolicitud.getContenido());
        comentarioRepository.save(comentarioBD);

    }
    @Transactional(readOnly = true)
    @Override
    public List<ComentarioDTORespuesta> comentariosPorLibro(Long libroId) {
        List<Comentario> comentarios = comentarioRepository.buscarComentarioPorLibroId(libroId);
        if(comentarios.isEmpty()){
            throw new RecursoNoEncontradoException("No hay comentarios agregados al libro con el id: " + libroId);
        }
        return comentarios.stream()
                .map( comentarioBD -> {
                    ComentarioDTORespuesta comentario = new ComentarioDTORespuesta();
                    comentario.setId(comentarioBD.getId());
                    comentario.setContenido(comentarioBD.getContenido());
                    comentario.setFechaDeCreacion(comentarioBD.getFechaDeCreacion());
                    comentario.setUsuarioId(comentarioBD.getUsuario().getId());
                    comentario.setNombreUsuario(comentarioBD.getUsuario().getNombre());
                    comentario.setNombreImagen(comentarioBD.getUsuario().getNombreImagen());
                    comentario.setLibroId(comentarioBD.getLibro().getId().toString());
                    comentario.setLibroTitulo(comentarioBD.getLibro().getTitulo());
                    return comentario;
                }).collect(Collectors.toList());
    }
        @Override
        public UsuarioDTO getUsuarioDTODeLibrodId(Long idLibro) {
            Libro libro = this.libroRepository.findById(idLibro).orElseThrow();
            Usuario usuario = libro.getUsuario();
            return UsuarioDTO.builder()
                .id(usuario.getId())
                .nombre(usuario.getNombre())
                .nombreImagen(usuario.getNombreImagen())
                .build();
                
        }

        @Override
        public Libro findLibro(Long libroId) {
            return this.libroRepository.findById(libroId).orElse(null);
        }

}

