package com.nocountry.appintercambiolibros.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ComentarioDTORespuesta {
    private Long id;
    private String contenido;
    private Date fechaDeCreacion;
    private Long usuarioId;
    private String nombreUsuario;
    private String nombreImagen;
    private String libroId;
    private String libroTitulo;
}
