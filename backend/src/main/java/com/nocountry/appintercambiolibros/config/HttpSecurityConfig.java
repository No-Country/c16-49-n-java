package com.nocountry.appintercambiolibros.config;

import com.nocountry.appintercambiolibros.util.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class HttpSecurityConfig {

    @Autowired
    private AuthenticationProvider daoAuthProvider;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;


   @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
       return httpSecurity
               .sessionManagement( session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
               .authenticationProvider(daoAuthProvider)
               .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
               .authorizeHttpRequests(HttpSecurityConfig::buildAuthorizeRequest)
               .headers( headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::disable))
               .csrf(csrf -> {
                   csrf.disable();
                   csrf.ignoringRequestMatchers("/h2-console/**");
               })
               .build();
   }

    private static void buildAuthorizeRequest(AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry authRequest) {
        //AUTORIZACIÓN PARA IMAGENES
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/imagenes/{filename}")
                .hasRole(Role.USUARIO.name());
        //AUTORIZACIÓN PARA LIBROS
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/{id}")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/{id}/resenias")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/{id}/resenias/promedio")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.POST, "api/v1/libros/usuario/{usuarioId}/libro/{libroId}/agregar-resenia")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.PUT, "api/v1/libros/usuario/{usuarioId}/libro/{libroId}/editar-resenia")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.DELETE, "api/v1/libros/resenias/eliminar-resenia/{id}")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/{id}/usuario")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.POST, "api/v1/libros")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/buscar/genero/{genero}")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.POST, "api/v1/libros/usuario/{usuarioId}/libro/{libroId}/agregar-comentario")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.DELETE, "api/v1/libros/usuario/{usuarioId}/libro/eliminar-comentario/{comentarioId}")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.PUT, "api/v1/libros/usuario/{usuarioId}/comentario/{comentarioId}")
                .hasRole(Role.USUARIO.name());
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/comentarios/libro/{libroId}")
                .hasRole(Role.USUARIO.name());
        //AUTORIZACIÓN USUARIOS
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/usuarios/{id}")
                .hasAnyRole(Role.USUARIO.name(), Role.ADMINISTRADOR.name());

        authRequest.requestMatchers(HttpMethod.GET, "api/v1/usuarios")
                .hasRole(Role.ADMINISTRADOR.name());

        authRequest.requestMatchers(HttpMethod.GET, "api/v1/usuarios/{id}/imagen")
                .hasAnyRole(Role.ADMINISTRADOR.name(), Role.USUARIO.name());

        //PÚBLICOS
        authRequest.requestMatchers(HttpMethod.POST, "api/v1/usuarios/registro").permitAll();
        authRequest.requestMatchers(HttpMethod.POST, "api/v1/auth/login").permitAll();
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/auth/validar-token").permitAll();
        authRequest.requestMatchers(HttpMethod.GET, "api/v1/libros/buscar/libro").permitAll();

        authRequest.requestMatchers("/v3/api-docs/**").permitAll();
        authRequest.requestMatchers("/doc/swagger-ui/**").permitAll();
        authRequest.requestMatchers(new AntPathRequestMatcher("/h2-console/**")).permitAll();

        authRequest.anyRequest().authenticated();
    }

}
