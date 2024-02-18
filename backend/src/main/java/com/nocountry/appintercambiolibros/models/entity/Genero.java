package com.nocountry.appintercambiolibros.models.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@Entity
//@Table(name = "generos")
public class Genero {

   /* @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)*/
    private Long id;

    private String nombre;
    private String descripcion;

}
