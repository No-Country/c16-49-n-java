import  React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AvatarUsuario from './AvatarUsuario';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarsIcon from '@mui/icons-material/Stars';
import '../estilos/tarjetaUsuario.css'
import AppContext from "../context/AppContext";

export default function TarjetaPerfilUsuario({usuario}) {
  const {token}= useContext(AppContext)
  // Verificar si el usuario existe y tiene un token
  const usuarioExisteYConToken = usuario && token;

  // Verificar si el usuario es de tipo 'USUARIO'
  const esUsuario = usuario && usuario.role === 'USUARIO';

  // Renderizar el componente basado en las condiciones
  if (usuarioExisteYConToken && esUsuario) {
  
  return (
   
    <Card sx={{ width: 300, height: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fpexels-engin-akyurt-2952871.jpg?alt=media&token=c9f466be-569c-4398-844f-7ccad61a3490"
          alt="fotografia de biblioteca de Engin Akyurt"
          className='tarjetaCabecera' />
        <div className='contenedorAvatarPerfil'><AvatarUsuario /></div>
        <CardContent className='contenedorNombre'>
          <Typography gutterBottom variant="h5">
            {usuario.nombre}
          </Typography>
        </CardContent>
        <div className='usuarioEstadisticas'>
          <div className='datosEstadisticas'>
            <Typography variant="h4" fontWeight={'bold'} color="text.primary">
            <MenuBookIcon />Libros </Typography>
            <Typography variant="body1" fontWeight={'bold'} color="text.secondary">
              {usuario.libros.length}
              </Typography>
          </div>
          <div className='datosEstadisticas'>
            <Typography variant="h4" fontWeight='bold' color="text.primary">
             <StarsIcon/> Reseñas </Typography>
            <Typography variant="body1" fontWeight='bold' color="text.secondary">
              3 </Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
    
  
  );

} else {
    return (
      <div>No se encontraron datos del usuario</div>
    );
  }
}
