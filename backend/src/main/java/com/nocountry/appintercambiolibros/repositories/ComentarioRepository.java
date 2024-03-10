package com.nocountry.appintercambiolibros.repositories;

import com.nocountry.appintercambiolibros.models.entity.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    @Query("SELECT c FROM Comentario c WHERE c.libro.id = ?1")
    List<Comentario> buscarComentarioPorLibroId(Long libroId);
}
