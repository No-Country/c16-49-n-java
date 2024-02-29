package com.nocountry.appintercambiolibros.services;

import com.nocountry.appintercambiolibros.models.dto.ReseniaDTO;

public interface ReseniaService {

    ReseniaDTO registrarResenia(Long idLibro, Long idUsuario, ReseniaDTO solicituDto);
    ReseniaDTO editarResenia(Long idLibro, Long idUsuario, ReseniaDTO solicituDto);
    boolean eliminarResenia(Long idResenia);
    Integer getPromedioReseniasDeLibroId(Long idLibro);
}
