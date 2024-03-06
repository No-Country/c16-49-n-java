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
@Table(name = "jwt_token")
public class JwtToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 3000)
    private String token;
    private Date expiracion;
    private boolean esValido;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Usuario usuario;
}
