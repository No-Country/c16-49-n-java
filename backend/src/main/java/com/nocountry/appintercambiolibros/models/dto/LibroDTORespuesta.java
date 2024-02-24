package com.nocountry.appintercambiolibros.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LibroDTORespuesta {
    private String id;
    private String isbn;
    private String titulo;
    private String autor;
    private String fechaDePublicacion;
    private String resumen;
    private String editorial;
    private String paginas;
    private String genero;
    private String nombreImagen;
    private String estado;
}
