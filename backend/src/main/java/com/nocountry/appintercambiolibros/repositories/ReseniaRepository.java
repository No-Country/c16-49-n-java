package com.nocountry.appintercambiolibros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.models.entity.Resenia;
import java.util.List;
import com.nocountry.appintercambiolibros.models.entity.Usuario;



public interface ReseniaRepository extends JpaRepository<Resenia, Long>  {

    List<GetReseniaDTO>  findByLibro(Libro libro);
    List<Resenia> findByLibroAndUsuario(Libro libro, Usuario usuario);
}
