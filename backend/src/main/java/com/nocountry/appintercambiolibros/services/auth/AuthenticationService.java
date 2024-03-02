package com.nocountry.appintercambiolibros.services.auth;

import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionRespuesta;
import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionSolicitud;
import com.nocountry.appintercambiolibros.models.entity.Usuario;
import com.nocountry.appintercambiolibros.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationService {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public AutenticacionRespuesta login(AutenticacionSolicitud authSolicitud) {

        Authentication autenticacion = new UsernamePasswordAuthenticationToken(
                authSolicitud.getEmail(), authSolicitud.getPassword()
        );

        authenticationManager.authenticate(autenticacion);

        Usuario usuarioDetalles = usuarioService.findByEmail(authSolicitud.getEmail()).get();

        String jwt = jwtService.generateToken(usuarioDetalles,generateExtraClaims(usuarioDetalles));

        return AutenticacionRespuesta.builder()
                .jwt(jwt)
                .build();
    }

    private Map<String, Object> generateExtraClaims(Usuario usuarioDetalles) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("nombre", usuarioDetalles.getNombre());
        extraClaims.put("role", usuarioDetalles.getRole().name());
        extraClaims.put("permisos", usuarioDetalles.getAuthorities());

        return extraClaims;
    }

    public boolean validarToken(String jwt) {
        try{
            jwtService.extractUsername( jwt );
            return true;
        }catch (Exception e){
            System.out.println(e.getMessage( ));
            return false;
        }
    }
}
