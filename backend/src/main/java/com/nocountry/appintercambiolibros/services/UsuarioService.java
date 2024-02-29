package com.nocountry.appintercambiolibros.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.nocountry.appintercambiolibros.models.dto.UsuarioDTO;
import com.nocountry.appintercambiolibros.models.entity.Usuario;

public interface UsuarioService {

    List<UsuarioDTO> listarUsuarios();
    UsuarioDTO find(Long idUsuario);
    Usuario findUsuario(Long idUsuario);
    UsuarioDTO registrar(UsuarioDTO usuario, MultipartFile imagen);

}
