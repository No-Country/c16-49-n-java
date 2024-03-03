package com.nocountry.appintercambiolibros.services.auth;

import com.nocountry.appintercambiolibros.config.filter.JwtAuthenticationFilter;
import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.dto.LibroDTORespuesta;
import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionRespuesta;
import com.nocountry.appintercambiolibros.models.dto.security.AutenticacionSolicitud;
import com.nocountry.appintercambiolibros.models.dto.security.PerfilUsuarioRespuesta;
import com.nocountry.appintercambiolibros.models.entity.JwtToken;
import com.nocountry.appintercambiolibros.models.entity.Usuario;
import com.nocountry.appintercambiolibros.repositories.JwtTokenRepository;
import com.nocountry.appintercambiolibros.services.UsuarioService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AuthenticationService {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private JwtTokenRepository jwtTokenRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    public AutenticacionRespuesta login(AutenticacionSolicitud authSolicitud) {

        Authentication autenticacion = new UsernamePasswordAuthenticationToken(
                authSolicitud.getEmail(), authSolicitud.getPassword()
        );

        authenticationManager.authenticate(autenticacion);

        Usuario usuarioDetalles = usuarioService.findByEmail(authSolicitud.getEmail()).get();

        String jwt = jwtService.generateToken(usuarioDetalles,generateExtraClaims(usuarioDetalles));
        saveUserToken(usuarioDetalles, jwt);

        return AutenticacionRespuesta.builder()
                .jwt(jwt)
                .build();
    }

    private void saveUserToken(Usuario usuarioDetalles, String jwt) {
        JwtToken jwtToken = JwtToken.builder()
                .token(jwt)
                .usuario(usuarioDetalles)
                .expiracion(jwtService.extractExpiration(jwt))
                .esValido(true)
                .build();
        jwtTokenRepository.save(jwtToken);
    }

    private Map<String, Object> generateExtraClaims(Usuario usuarioDetalles) {
        Map<String, Object> extraClaims = new HashMap<>();
        extraClaims.put("nombre", usuarioDetalles.getNombre());
        extraClaims.put("role", usuarioDetalles.getRole().name());
        extraClaims.put("permisos", usuarioDetalles.getAuthorities());

        return extraClaims;
    }

    public boolean validarToken(String jwt) {
        Optional<JwtToken> token = jwtTokenRepository.findByToken(jwt);
        return jwtAuthenticationFilter.validateToken(token);
    }

    public PerfilUsuarioRespuesta usuarioLogueado() {
        UsernamePasswordAuthenticationToken auth = (UsernamePasswordAuthenticationToken)
                SecurityContextHolder.getContext().getAuthentication();
        String email = (String) auth.getPrincipal();
        Usuario usuario = usuarioService.findByEmail(email)
                .orElseThrow( ()-> new RecursoNoEncontradoException("No se encontro al usuario con el email proporcionado"));
        List<LibroDTORespuesta> libros = usuario.getLibros().stream().map( libro -> {
            return LibroDTORespuesta.builder()
                    .id(libro.getId().toString())
                   .isbn(libro.getIsbn())
                   .titulo(libro.getTitulo())
                   .autor(libro.getAutor())
                   .fechaDePublicacion(libro.getFechaDePublicacion())
                   .resumen(libro.getResumen())
                   .editorial(libro.getEditorial())
                   .paginas(libro.getPaginas())
                   .genero(libro.getGenero())
                   .estado(libro.getEstado().toString())
                   .nombreImagen(libro.getNombreImagen())
                   .build();
        }).toList();

        return PerfilUsuarioRespuesta.builder()
                .nombre(usuario.getNombre())
                .email(usuario.getEmail())
                .role(usuario.getRole())
                .credentialsNonExpired(usuario.isCredentialsNonExpired())
                .accountNonExpired(usuario.isAccountNonExpired())
                .accountNonLocked(usuario.isAccountNonLocked())
                .libros(libros)
                .build();
    }

    public void logout(HttpServletRequest httpServletRequest) {

        String jwt = jwtService.extractJwtFromRequest(httpServletRequest);

        if(!StringUtils.hasText(jwt)) return;
        Optional<JwtToken> token = jwtTokenRepository.findByToken(jwt);

        if(token.isPresent() && token.get().isEsValido()){
            token.get().setEsValido(false);
            jwtTokenRepository.save(token.get());
        }
    }
}
