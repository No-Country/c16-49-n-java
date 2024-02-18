package com.nocountry.appintercambiolibros.especificacion;

import com.nocountry.appintercambiolibros.models.entity.Autor;
import com.nocountry.appintercambiolibros.models.entity.Genero;
import com.nocountry.appintercambiolibros.models.entity.Libro;
import jakarta.persistence.criteria.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class BuscarLibroEspecificacion implements Specification<Libro> {

    private String isbn;
    private String titulo;
    private String autor;


    @Override
    public Predicate toPredicate(Root<Libro> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {

        List<Predicate> predicados = new ArrayList<>();

        if(StringUtils.hasText(isbn)){
            Expression<String> libroISBNToLowerCase = criteriaBuilder.lower(root.get("isbn"));
            Predicate ISBNLikePredicate = criteriaBuilder.like(libroISBNToLowerCase, "%".concat(isbn.toLowerCase()).concat("%"));
            predicados.add(ISBNLikePredicate);
        }
        if(StringUtils.hasText(titulo)){
            Expression<String> libroTituloToLowerCase = criteriaBuilder.lower(root.get("titulo"));
            Predicate tituloLikePredicate = criteriaBuilder.like(libroTituloToLowerCase, "%".concat(titulo.toLowerCase()).concat("%"));
            predicados.add(tituloLikePredicate);
        }

        //Join<Libro, Autor> libroAutorJoin = root.join("autor");
        if(StringUtils.hasText(autor)){
            Expression<String> autorNombreToLowerCase = criteriaBuilder.lower(root.get("autor"));
            Predicate autorNombreLikePredicate = criteriaBuilder.like(autorNombreToLowerCase, "%".concat(autor.toLowerCase()).concat("%"));
            predicados.add(autorNombreLikePredicate);
        }

        return criteriaBuilder.and( predicados.toArray( new Predicate[predicados.size()] ) );
    }
}
