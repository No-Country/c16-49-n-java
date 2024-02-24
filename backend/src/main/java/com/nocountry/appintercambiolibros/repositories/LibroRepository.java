package com.nocountry.appintercambiolibros.repositories;

import com.nocountry.appintercambiolibros.models.entity.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LibroRepository extends JpaRepository<Libro, Long>, JpaSpecificationExecutor<Libro> {
    @Query("SELECT l FROM Libro l WHERE l.genero LIKE %?1%")
    List<Libro> findByGenero(String genero);
}
