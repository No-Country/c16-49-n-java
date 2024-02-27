import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function AvatarUsuario() {
    const [imagenUsuario, setImagenUsuario] = useState();

    // useEffect(() => {
    //     if (usuario && usuario.nombreImagen) {
    //         const apiUrl = `http://localhost:8080/api/v1/imagenes/${usuario.nombreImagen}`;

    //         fetch(apiUrl)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Error al cargar la imagen');
    //                 }
    //                 return response.blob();
    //             })
    //             .then(blob => {
    //                 const imageUrl = URL.createObjectURL(blob);
    //                 setImagenUsuario(imageUrl);
    //             })
    //             .catch(error => {
    //                 console.error('Error:', error);
    //             });
    //     }
    // }, [usuario]);

  return (
    // AGREGAR CODIGO PARA IR A BUSCAR LA IMAGEN DEL USUARIO

    <Stack direction="row" spacing={2}>
       {imagenUsuario ?
      <Avatar alt="imagen Usuario" src={imagenUsuario} />
      :
      <Avatar src="/broken-image.jpg" />}
    </Stack>
  );
}
