package com.nocountry.appintercambiolibros.config.filter;

import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.models.entity.JwtToken;
import com.nocountry.appintercambiolibros.repositories.JwtTokenRepository;
import com.nocountry.appintercambiolibros.services.UsuarioService;
import com.nocountry.appintercambiolibros.services.auth.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {


    @Autowired
    private JwtService jwtService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtTokenRepository jwtTokenRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("Entro en el filtro JWT Authentication Filter");

        String jwt = jwtService.extractJwtFromRequest(request);
        if(!StringUtils.hasText(jwt)){
            filterChain.doFilter(request, response);
            return;
        }
        Optional<JwtToken> token = jwtTokenRepository.findByToken(jwt);

        boolean isValid = validateToken(token);

        if(!isValid){
            filterChain.doFilter(request, response);
            return;
        }

        String email = jwtService.extractUsername(jwt);

        UserDetails usuario = usuarioService.findByEmail(email)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con el email proporcionado"));

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                usuario.getUsername(), null, usuario.getAuthorities()
        );

        authToken.setDetails(new WebAuthenticationDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }

    public boolean validateToken(Optional<JwtToken> jwtToken) {
        if(jwtToken.isEmpty()){
            System.out.println("Token no existe en la base de datos");
            return false;
        }
        JwtToken token = jwtToken.get();
        Date now = new Date(System.currentTimeMillis());

        boolean esValido = token.isEsValido() && token.getExpiracion().after(now);
        if(!esValido){
            System.out.println("Token invalido");
            updateTokenStatus(token);
        }
        return esValido;
    }

    private void updateTokenStatus(JwtToken token) {
        token.setEsValido(false);
        jwtTokenRepository.save(token);
    }
}


