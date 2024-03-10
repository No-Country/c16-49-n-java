package com.nocountry.appintercambiolibros.controllers;

import com.nocountry.appintercambiolibros.models.dto.security.UsuarioRegistroSolicitud;
import com.nocountry.appintercambiolibros.services.auth.AuthenticationService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.appintercambiolibros.models.dto.UsuarioDTO;
import com.nocountry.appintercambiolibros.services.ImagenService;
import com.nocountry.appintercambiolibros.services.JsonService;
import com.nocountry.appintercambiolibros.services.UsuarioService;

import io.swagger.v3.oas.annotations.Operation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/v1/usuarios")
@CrossOrigin(origins = {"http://localhost:5173", "https://paginascompartidas.netlify.app/"})
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @Autowired
    JsonService jsonService;

    @Autowired
    ImagenService imagenService;

    @Autowired
    private AuthenticationService authenticationService;

    @Operation(summary = "Registra un usuario")
    @PostMapping("registro")
    public ResponseEntity<?> registrarUsuario(@RequestBody @Valid UsuarioRegistroSolicitud usuarioRegistro){
        usuarioService.registrarUsuario(usuarioRegistro);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Lista todos los usuarios")
    @GetMapping
    public List<UsuarioDTO> getMethodName() {
        return this.usuarioService.listarUsuarios();
    }
    @Hidden
    @SecurityRequirement(name = "bearerAuth")
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
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Obtiene los datos del usuario solicitado")
    @GetMapping("{id}")
    public UsuarioDTO obtenerUsuario(@PathVariable("id") Long idUsuario ) {
        return this.usuarioService.find(idUsuario);       
    }
    @SecurityRequirement(name = "bearerAuth")
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
