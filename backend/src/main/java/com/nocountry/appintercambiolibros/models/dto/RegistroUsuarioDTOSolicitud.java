package com.nocountry.appintercambiolibros.models.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class RegistroUsuarioDTOSolicitud {

    @NotEmpty
    @Size(min = 10, max = 13)
    private String nombre;
    
    @NotEmpty
    @Size(min = 10, max = 13)
    private String email;
    
    @NotEmpty
    @Size(min = 10, max = 13)
    private String pssword;

}
