package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionRespuesta;
import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionSolicitud;
import com.nocountry.appintercambiolibros.models.dto.security.PerfilUsuarioRespuesta;
import com.nocountry.appintercambiolibros.services.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {
        @ApiResponse(responseCode = "401", description = "No se encontraron credenciales del usuario"),
})
@RestController
@RequestMapping("api/v1/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationService authenticationService;

    @Operation(summary = "Inicio de sesion para autenticarse")
    @PostMapping("/login")
    public ResponseEntity<?> autenticacion(@RequestBody @Valid AutenticacionSolicitud authenticationRequest){
        AutenticacionRespuesta autRespuesta = authenticationService.login(authenticationRequest);
        return ResponseEntity.ok(autRespuesta);

    }
    @Operation(summary = "Cerrar sesión")
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest httpServletRequest){
        authenticationService.logout(httpServletRequest);
        return ResponseEntity.ok("Sesión cerrada exitosamente");
    }
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Obtener perfil de usuario")
    @GetMapping("/perfil")
    public ResponseEntity<?> perfilUsuarioLogueado(){
        PerfilUsuarioRespuesta userProfile = authenticationService.usuarioLogueado();
        return ResponseEntity.ok(userProfile);
    }
    @Hidden
    @GetMapping("/validar-token")
    public ResponseEntity<Boolean> validate(@RequestParam String jwt){
        boolean esValido = authenticationService.validarToken(jwt);
        return ResponseEntity.ok(esValido);
    }

}
