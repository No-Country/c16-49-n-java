package com.nocountry.appintercambiolibros.models.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor 
@NoArgsConstructor
@Entity
@Table(name = "resenias")
public class Resenia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @DecimalMin(value = "0")
    @DecimalMax(value = "5")
    private double calificacion;  

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "libro_id")
    private Libro libro;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    
}
