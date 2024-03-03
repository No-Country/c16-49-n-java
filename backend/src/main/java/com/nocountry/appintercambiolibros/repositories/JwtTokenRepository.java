package com.nocountry.appintercambiolibros.repositories;

import com.nocountry.appintercambiolibros.models.entity.JwtToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JwtTokenRepository extends JpaRepository<JwtToken, Long> {
    Optional<JwtToken> findByToken(String jwt);
}
