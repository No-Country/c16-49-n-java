package com.nocountry.appintercambiolibros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.models.entity.Resenia;
import java.util.List;
import com.nocountry.appintercambiolibros.models.entity.Usuario;



public interface ReseniaRepository extends JpaRepository<Resenia, Long>  {

    List<GetReseniaDTO>  findByLibro(Libro libro);
    List<Resenia> findByLibroAndUsuario(Libro libro, Usuario usuario);

    @Query("SELECT ROUND(AVG(r.calificacion)) FROM Resenia r WHERE r.libro.id = :idLibro")
    Integer promedioCalificacionPorLibroId( @Param("idLibro") Long idLibro);
}
