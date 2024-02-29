package com.nocountry.appintercambiolibros.models.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@Builder
@Entity
@Table(name = "libros")
public class Libro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String isbn;

    private String titulo;
    private String autor;
    private String fechaDePublicacion;
    @Size(min = 50, max = 400)
    private String resumen;
    private String editorial;
    private String paginas;
    private String genero;
    private String nombreImagen;

    @Enumerated(EnumType.STRING)
    private LibroEstado estado;

    @Temporal(TemporalType.DATE)
    private Date fechaDeCreacion;

    @ManyToOne( fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToMany(mappedBy = "libro", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    List<Resenia> resenias;

    @OneToMany(mappedBy = "libro", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    List<Comentario> comentarios;

    public Libro() {
        this.comentarios = new ArrayList<>();
    }

    @PrePersist
    public void fechaDeCreacion(){
        this.fechaDeCreacion = new Date();
    }


    public static enum LibroEstado{
        NUEVO,
        USADO,
        DESGASTADO
    }

    public void addComentario(Comentario comentario){
        this.comentarios.add(comentario);
        comentario.setLibro(this);
    }
    public void removeComentario(Comentario comentario){
        this.comentarios.remove(comentario);
        comentario.setLibro(null);
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj){
            return true;
        }
        if(!(obj instanceof Libro l)){
            return false;
        }
        return this.id != null && this.id.equals(l.getId());
    }

}
