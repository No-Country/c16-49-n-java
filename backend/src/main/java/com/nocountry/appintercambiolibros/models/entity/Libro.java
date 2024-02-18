package com.nocountry.appintercambiolibros.models.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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
    @Size(min = 20, max = 500)
    private String resumen;
    private String editorial;
    private String paginas;
    private String genero;

    @Temporal(TemporalType.DATE)
    private Date fechaDeCreacion;

    @PrePersist
    public void fechaDeCreacion(){
        this.fechaDeCreacion = new Date();
    }
}
