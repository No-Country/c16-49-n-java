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
@Table(name = "comentarios")
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contenido;

    @Temporal(TemporalType.DATE)
    private Date fechaDeCreacion;

    @ManyToOne(fetch = FetchType.EAGER)
    private Usuario usuario;

    @PrePersist
    public void fechaDeCreacion(){
        this.fechaDeCreacion = new Date();
    }
}
