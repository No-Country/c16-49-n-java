package com.nocountry.appintercambiolibros.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.appintercambiolibros.models.dto.ReseniaDTO;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.models.entity.Resenia;
import com.nocountry.appintercambiolibros.models.entity.Usuario;
import com.nocountry.appintercambiolibros.repositories.ReseniaRepository;
import com.nocountry.appintercambiolibros.services.LibroService;
import com.nocountry.appintercambiolibros.services.ReseniaService;
import com.nocountry.appintercambiolibros.services.UsuarioService;

@Service
public class ReseniaServiceImpl implements ReseniaService {

    @Autowired
    private ReseniaRepository reseniaRepository;
    
    @Autowired
    private LibroService libroService;

    @Autowired
    private UsuarioService usuarioService;

    @Override
    public ReseniaDTO registrarResenia(Long idLibro, Long idUsuario, ReseniaDTO solicituDto) {

        Libro libro = this.libroService.findLibro(idLibro);

        if (libro == null){
            return null;
        }

        Usuario usuario = this.usuarioService.findUsuario(idUsuario);

        if (usuario == null){
            return null;
        }

        Resenia nvaResenia = new Resenia();

        nvaResenia.setLibro(libro);
        nvaResenia.setUsuario(usuario);
        nvaResenia.setCalificacion(solicituDto.getCalificacion());

        nvaResenia = this.reseniaRepository.save(nvaResenia); 
        return ReseniaDTO.builder()
            .id(nvaResenia.getId())
            .calificacion(nvaResenia.getCalificacion())
            .build();
    }

    @Override
    public ReseniaDTO editarResenia(Long idLibro, Long idUsuario, ReseniaDTO solicituDto) {
        
        Libro libro = this.libroService.findLibro(idLibro);

        if (libro == null){
            return null;
        }

        Usuario usuario = this.usuarioService.findUsuario(idUsuario);

        if (usuario == null){
            return null;
        }

        List<Resenia> reps = this.reseniaRepository.findByLibroAndUsuario(libro, usuario);
        if (reps.isEmpty()){
            return null;
        }

        Resenia resp = reps.get(0);
        resp.setCalificacion(solicituDto.getCalificacion());
        this.reseniaRepository.save(resp);

        return ReseniaDTO.builder()
            .id(resp.getId())
            .calificacion(resp.getCalificacion())
            .build();
    }

    @Override
    public boolean eliminarResenia(Long idResenia) {
        if ( this.reseniaRepository.findById(idResenia).orElse(null) == null){
            return false;
        }

        this.reseniaRepository.deleteById(idResenia);
        return true;
    }

    
}
