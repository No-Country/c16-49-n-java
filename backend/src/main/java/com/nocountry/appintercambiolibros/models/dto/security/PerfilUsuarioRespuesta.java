package com.nocountry.appintercambiolibros.models.dto.security;

import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.util.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PerfilUsuarioRespuesta {
    private String nombre;
    private Role role;
    private String email;
    private boolean credentialsNonExpired;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private List<LibroDTORespuesta> libros;
}
