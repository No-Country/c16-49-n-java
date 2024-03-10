package com.nocountry.appintercambiolibros.models.dto.security;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsuarioRegistroSolicitud {
    @NotEmpty
    @Size(min = 4, max = 60)
    private String nombre;
    @NotEmpty
    @Size(min = 10, max = 30)
    @Email
    @Schema(description = "Correo electrónico del usuario", example = "usuario@example.com")
    @Pattern(regexp = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$", message = "Formato de email inválido")
    private String email;
    @NotEmpty
    @Size(min = 8, max = 12)
    private String password;
    @NotEmpty
    @Size(min = 8, max = 12)
    private String repeatedPassword;

}
