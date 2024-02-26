package com.nocountry.appintercambiolibros.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.appintercambiolibros.models.dto.GetReseniaDTO;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import com.nocountry.appintercambiolibros.models.entity.Resenia;
import java.util.List;


public interface ReseniaRepository extends JpaRepository<Resenia, Long>  {

    List<GetReseniaDTO>  findByLibro(Libro libro);
}
