package com.nocountry.appintercambiolibros.models.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.models.entity.Usuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(Include.NON_NULL)
public class ReseniaDTO {

    private Long id;
    private double calificacion;
    // private Libro libro;
    // private Usuario usuario;
}
