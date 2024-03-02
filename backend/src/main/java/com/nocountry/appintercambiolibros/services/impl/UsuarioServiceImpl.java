package com.nocountry.appintercambiolibros.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.nocountry.appintercambiolibros.exceptions.InvalidPasswordException;
import com.nocountry.appintercambiolibros.models.dto.security.UsuarioRegistroSolicitud;
import com.nocountry.appintercambiolibros.util.Role;
import org.hibernate.mapping.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.UsuarioDTO;
import com.nocountry.appintercambiolibros.models.entity.Usuario;
import com.nocountry.appintercambiolibros.repositories.UsuarioRepository;
import com.nocountry.appintercambiolibros.services.ImagenService;
import com.nocountry.appintercambiolibros.services.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{

    @Autowired
    private ImagenService imagenService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UsuarioDTO registrar(UsuarioDTO dtoUsuario, MultipartFile imagen) {

        final String nombreImagen = this.imagenService.guardarImagen(imagen);

        if (nombreImagen == null){
            // TODO: lanzar un error personalizado
            return null;
        }

        Usuario nuevo = new Usuario();
        nuevo.setNombre(dtoUsuario.getNombre());
        nuevo.setEmail(dtoUsuario.getEmail());
        nuevo.setPassword(dtoUsuario.getPssword());
        nuevo.setNombreImagen(nombreImagen);
        nuevo = this.usuarioRepository.save(nuevo);

        return UsuarioDTO.builder()
            .id(nuevo.getId())
            .nombre(nuevo.getNombre())
            .email(nuevo.getEmail())
            .nombreImagen(nuevo.getNombreImagen())
            .build();
    }
    @Transactional
    @Override
    public void registrarUsuario(UsuarioRegistroSolicitud usuarioRegistro) {
        validarPassword(usuarioRegistro);

        Usuario usuario = Usuario.builder()
                .nombre(usuarioRegistro.getNombre())
                .email(usuarioRegistro.getEmail())
                .password(passwordEncoder.encode(usuarioRegistro.getPassword()))
                .role(Role.USUARIO)
                .build();

        usuarioRepository.save(usuario);
    }

    @Override
    public Optional<Usuario> findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    @Override
    public Optional<Usuario> findByNombre(String nombre) {
        return usuarioRepository.findByNombre(nombre);
    }

    private void validarPassword(UsuarioRegistroSolicitud usuarioRegistro) {

        if(!StringUtils.hasText(usuarioRegistro.getPassword()) || !StringUtils.hasText(usuarioRegistro.getRepeatedPassword())){
            throw new InvalidPasswordException("Passwords don't match");
        }

        if(!usuarioRegistro.getPassword().equals(usuarioRegistro.getRepeatedPassword())){
            throw new InvalidPasswordException("Passwords don't match");
        }
    }

    @Override
    public List<UsuarioDTO> listarUsuarios() {

        List<Usuario> usuarios = this.usuarioRepository.findAll();
        List<UsuarioDTO> respuesta = usuarios.stream().map(
            (Usuario us) -> {
                return UsuarioDTO.builder()
                    .id(us.getId())
                    .nombre(us.getNombre())
                    .email(us.getEmail())
                    .nombreImagen(us.getNombreImagen())
                    .build();
            }
        ).collect(Collectors.toList());

        if (respuesta.isEmpty()) {
            throw new RecursoNoEncontradoException("No se encontraron usuarios");
        }
        
        return respuesta;
        
    }

    @Override
    public UsuarioDTO find(Long idUsuario) {
        Usuario usuario = this.usuarioRepository.findById(idUsuario).orElse(null);
        if (usuario == null){
            // TODO: Agregar alguna exception
            return null;
        }
        return UsuarioDTO.builder()
            .id(usuario.getId())
            .nombre(usuario.getNombre())
            .email(usuario.getEmail())
            .nombreImagen(usuario.getNombreImagen())
            .build();
    }

    @Override
    public Usuario findUsuario(Long idUsuario) {
        return this.usuarioRepository.findById(idUsuario).orElse(null);
    }
}
