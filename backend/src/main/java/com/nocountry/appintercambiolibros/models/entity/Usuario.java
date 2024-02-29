package com.nocountry.appintercambiolibros.models.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min = 1, max = 30)
    private String nombre;

    @Size(min = 5, max = 50)
    private String email;
    
    private String nombreImagen;
    private String password;
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

}