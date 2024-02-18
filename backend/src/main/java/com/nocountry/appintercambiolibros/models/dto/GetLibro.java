package com.nocountry.appintercambiolibros.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetLibro {
    private String ISBN;
    private String titulo;
    private String autor;
    private String fechaDePublicacion;
    private String resumen;
    private String editorial;
    private String paginas;
    private String genero;
}
