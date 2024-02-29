package com.nocountry.appintercambiolibros.repositories;

import com.nocountry.appintercambiolibros.models.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
