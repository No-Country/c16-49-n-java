package com.nocountry.appintercambiolibros.services;

import org.springframework.web.multipart.MultipartFile;

public interface ImagenService {

    String guardarImagen(MultipartFile imagen);
    public byte[] obtenerImagen(String filename);
}
