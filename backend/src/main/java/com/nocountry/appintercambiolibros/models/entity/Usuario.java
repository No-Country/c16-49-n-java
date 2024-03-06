package com.nocountry.appintercambiolibros.models.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.nocountry.appintercambiolibros.util.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Getter
@Setter
@AllArgsConstructor
@Builder
@Entity
@Table(name = "usuarios")
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String email;
    private String nombreImagen;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
    @CreationTimestamp
    private Date fechaCreacion;
    
    @OneToMany( mappedBy = "usuario", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    List<Libro> libros;

    @OneToMany( mappedBy = "usuario", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    List<Resenia> resenias;

    @OneToMany( mappedBy = "usuario", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    List<Comentario> comentarios;

    public Usuario() {
        this.comentarios = new ArrayList<>();
        this.libros = new ArrayList<>();
    }

    public void addLibro(Libro libro){
        this.libros.add(libro);
        libro.setUsuario(this);
    }

    public void removeLibro(Comentario comentario) {
        this.comentarios.remove(comentario);
        comentario.setUsuario(null);
    }

    public void addComentario(Comentario comentario){
            this.comentarios.add(comentario);
            comentario.setUsuario(this);
    }

    public void removeComentario(Comentario comentario){
            this.comentarios.remove(comentario);
            comentario.setUsuario(null);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(role == null){return null;}
        if(role.getPermisos() == null){return null;}

        List<SimpleGrantedAuthority> authorities = role.getPermisos().stream()
                .map(Enum::name)
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.role.name()));
        return authorities;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}