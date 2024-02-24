package com.nocountry.appintercambiolibros.models.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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
    private String resumen;
    private String editorial;
    private String paginas;
    private String genero;
    private String nombreImagen;

    @Enumerated(EnumType.STRING)
    private LibroEstado estado;

    @Temporal(TemporalType.DATE)
    private Date fechaDeCreacion;

    @PrePersist
    public void fechaDeCreacion(){
        this.fechaDeCreacion = new Date();
    }


    public static enum LibroEstado{
        NUEVO,
        USADO,
        DESGASTADO
    }


}
