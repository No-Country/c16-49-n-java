package com.nocountry.appintercambiolibros.services;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImagenService {

    private final Path imagePath;

    @Autowired
    public ImagenService(@Value("${storage.path.imagen}") Path imagePath) throws IOException{
        this.imagePath = imagePath;
        this.asegurarDirectorio();
    }

    public void asegurarDirectorio() throws IOException{
        if (!Files.exists(this.imagePath)){
            Files.createDirectories(this.imagePath);
        }
    }

    public byte[] obtenerImagen(String filename) throws IOException {
        final Path pathImage = Paths.get(this.imagePath.toAbsolutePath().toString(), filename);
        if(Files.exists(pathImage)){
            return Files.readAllBytes(pathImage);
        } else {
            throw new FileNotFoundException("No se encontro el archivo" + filename );
        }
    }

    public String guardarImagen(MultipartFile imagen) throws IllegalArgumentException, IllegalStateException, IOException {
        if (imagen == null){
            throw new IllegalArgumentException("No se envió ningun archivo");
        }

        String extension = StringUtils.getFilenameExtension(imagen.getOriginalFilename());
        final String nombre = UUID.randomUUID().toString() + "." + extension;
        final Path path_imagen = Paths.get(this.imagePath.toAbsolutePath().toString(), nombre);

        imagen.transferTo(path_imagen);
        return nombre;
    }
}
