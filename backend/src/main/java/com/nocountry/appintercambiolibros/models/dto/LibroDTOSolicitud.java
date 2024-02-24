package com.nocountry.appintercambiolibros.models.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LibroDTOSolicitud implements Serializable {

    @NotEmpty
    @Size(min = 10, max = 13)
    private String isbn;
    @NotEmpty
    @Size(min = 4, max = 50)
    private String titulo;
    @NotEmpty
    @Size(min = 4, max = 50)
    private String autor;
    @NotEmpty
    @Size(min = 4, max = 15)
    private String fechaDePublicacion;
    @NotEmpty
    @Size(min = 20, max = 500)
    private String resumen;
    @NotEmpty
    @Size(min = 5, max = 30)
    private String editorial;
    @Min(value = 1)
    private int paginas;
    @NotEmpty
    @Size(min = 4, max = 50)
    private String genero;
    @NotEmpty
    @Size(min = 5, max = 10)
    private String estado;


}
