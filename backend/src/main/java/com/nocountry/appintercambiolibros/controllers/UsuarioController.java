package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.security.UsuarioRegistroSolicitud;
import com.nocountry.appintercambiolibros.services.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.appintercambiolibros.models.dto.UsuarioDTO;
import com.nocountry.appintercambiolibros.models.entity.Usuario;
import com.nocountry.appintercambiolibros.services.ImagenService;
import com.nocountry.appintercambiolibros.services.JsonService;
import com.nocountry.appintercambiolibros.services.UsuarioService;

import io.swagger.v3.oas.annotations.Operation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@ApiResponses(value = {
        @ApiResponse(responseCode= "200", description = "Operación exitosa"),
        @ApiResponse(responseCode= "201", description = "Operación de creación exitosa"),
        @ApiResponse(responseCode = "404", description = "No encontrado"),
        @ApiResponse(responseCode = "403", description = "No se encontraron permisos para esta solicitud"),
        @ApiResponse(responseCode = "500", description = "Error interno del servidor")
})
@RestController
@RequestMapping("api/v1/usuarios")
@CrossOrigin(origins = "http://localhost:5173")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    JsonService jsonService;

    @Autowired
    ImagenService imagenService;

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("registro")
    public ResponseEntity<?> registerOne(@RequestBody @Valid UsuarioRegistroSolicitud usuarioRegistro){
        usuarioService.registrarUsuario(usuarioRegistro);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    @Operation(summary = "Lista todos los usuarios")
    @GetMapping
    public List<UsuarioDTO> getMethodName() {
        return this.usuarioService.listarUsuarios();
    }

    @Operation(summary = "Registra un nuevo usuario")
    @PostMapping("register")
    public ResponseEntity<?> registrarUsuario(
        @RequestParam(name = "json") String objUsuario,
        @RequestParam(name = "imagen") MultipartFile imagen) {
        try {
            UsuarioDTO usuarioNuevo = this.jsonService.fromJson(objUsuario, UsuarioDTO.class);
            return ResponseEntity.ok().body(this.usuarioService.registrar(usuarioNuevo, imagen));
        }  catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error al intentar guardar el usuario");
        }
    }

    @Operation(summary = "Obtiene los datos del usuario solicitado")
    @GetMapping("{id}")
    public UsuarioDTO obtenerUsuario(@PathVariable("id") Long idUsuario ) {
        return this.usuarioService.find(idUsuario);       
    }

    @Operation(summary = "Devuelve la imagen del usuario")
    @GetMapping("{id}/imagen")
    public ResponseEntity<?> obtenerImagenUsuario(@PathVariable("id") Long idUsuario ) {

        UsuarioDTO usuario = usuarioService.find(idUsuario);
        if (usuario == null){
            return ResponseEntity.notFound().build();
        }

        try {
            byte[] img = this.imagenService.obtenerImagen(usuario.getNombreImagen());
            if (img == null || img.length == 0){
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf("image/jpeg"))
                .body(img);
        }  catch (Exception e) {
            return ResponseEntity.internalServerError().build();
            
        }
    }

    
    
    
}
