package com.nocountry.appintercambiolibros.config;

import com.nocountry.appintercambiolibros.exceptions.RecursoNoEncontradoException;
import com.nocountry.appintercambiolibros.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityBeansInjector {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Bean
    public AuthenticationManager adminAutentica(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    AuthenticationProvider proveedorAutentica(){
        DaoAuthenticationProvider estrategiaAutentica = new DaoAuthenticationProvider();
        estrategiaAutentica.setPasswordEncoder(passwordEncoder());
        estrategiaAutentica.setUserDetailsService(userDetailsService());
        return  estrategiaAutentica;
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(){

        return (email) -> usuarioRepository.findByEmail(email)
                .map(usuario -> org.springframework.security.core.userdetails.User.builder()
                        .username(usuario.getEmail())
                        .password(usuario.getPassword())
                        .build())
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con el email proporcionado"));
    }

}
