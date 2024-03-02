package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionRespuesta;
import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionSolicitud;
import com.nocountry.appintercambiolibros.services.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Hidden
    @GetMapping("/validar-token")
    public ResponseEntity<Boolean> validate(@RequestParam String jwt){
        boolean esValido = authenticationService.validarToken(jwt);
        return ResponseEntity.ok(esValido);
    }

}
