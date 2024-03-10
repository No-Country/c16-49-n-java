package com.nocountry.appintercambiolibros.models.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ComentarioDTOSolicitud {

    @NotEmpty
    @Size(min = 5, max = 255)
    private String contenido;
}
