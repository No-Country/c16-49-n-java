package com.nocountry.appintercambiolibros.services.impl;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.nocountry.appintercambiolibros.services.ImagenService;

@Service
public class ImagenServiceImpl implements ImagenService {

    private final Path imagePath;

    @Value("${gcp.bucket.name}")
    private String bucketname;

    @Autowired
    private Storage storage;

    @Autowired
    public ImagenServiceImpl(@Value("${storage.path.imagen}") Path imagePath) throws IOException{
        this.imagePath = Paths.get(System.getProperty("user.home"), imagePath.toString());
        this.asegurarDirectorio();
    }

    public void asegurarDirectorio() throws IOException{
        if (!Files.exists(this.imagePath)){
            Files.createDirectories(this.imagePath);
        }
    }

    public byte[] obtenerImagen(String filename) {
        Blob blob = storage.get(bucketname, filename);
        return blob.getContent();
    }

    public String guardarImagen(MultipartFile file) {
        BlobId blobId = BlobId.of(bucketname, file.getOriginalFilename());
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
            .setContentType(file.getContentType()).build();
        try {
            Blob blob = storage.create(blobInfo, file.getBytes());
            return file.getOriginalFilename();
        } catch (Exception e) {
            return null;
        }
    }
}
