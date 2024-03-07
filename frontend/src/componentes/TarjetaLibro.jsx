import * as React from 'react';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Boton from './Boton';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import { Box } from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';
import '../estilos/tarjetaLibros.css';



export default function TarjetaLibro({ libro }) {
  // console.log(libro)
  const { token, setLibroSeleccionado } = useContext(AppContext)
  const [mensaje, setMensaje] =useState('')

  const handleClick = (e) => {
    if(token){
      setMensaje('')
    }
    setMensaje('Inicia sesión para ver más informacion')
    console.log('hice clic en el libro'+ libro.id)
    // if (!token) {
    //   // Si el usuario tiene un token (está autenticado), establece el ID del libro seleccionado
      // const id=libro.id
      // setLibroSeleccionado(id);
    // } else {
      // Si el usuario no está autenticado, redirige al usuario a la página de registro
      // window.location.href = '/Registro';
    }
  
  const [imagen, setImagen] = useState(null);

  const imagenGenerica = 'https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FPortada%20Libro%20Generica.png?alt=media&token=42926409-eb7b-4a16-9298-e6a53d6faee8'

  useEffect(() => {
    if (libro && libro.nombreImagen) {
      const apiUrl = `https://paginascompartidas.fly.dev/api/v1/imagenes/${libro.nombreImagen}`;
      // const apiUrl = `http://localhost:8080/api/v1/imagenes/${libro.nombreImagen}`;
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al cargar la imagen');
          }
          return response.blob();
        })
        .then(blob => {
          const imageUrl = URL.createObjectURL(blob);
          setImagen(imageUrl);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [libro]);


  return (


    <ThemeProvider theme={(theme.palette, theme.typography)}>
      {
        libro &&
        <Card sx={{ width: '30%', height: 300, justifyContent: 'space-between', display:'flex', flexDirection:'row'}}>
          <CardMedia
            component="img"
            alt="caratula libro"
            height="100%"
            width='30%'
            image={imagen ? imagen : imagenGenerica}
          />
          <Box sx={{ height: '100%', display:'flex', flexDirection:'column', width:'70%' }}>
          <CardContent sx={{ height: '70%', display:'flex', flexDirection:'column', width:'100%'}} style={{ textAlign: 'left' }}>
            
            <Typography variant="h5" color="secondary.dark">
              {libro.titulo}
            </Typography>
            <Typography gutterBottom variant="body2" component="div" style={{ textAlign: 'left', marginTop:'20px'}}>
              {/* Autor:{libro.autor.length > 25 ? `${libro.autor.slice(0, 25)}...` : libro.autor} */}
              Autor:{libro.autor.length > 25 ? `${libro.author.slice(0, 25)}...` : libro.autor}
            </Typography>
          </CardContent>
          <CardActions sx={{ height: '30%', justifyContent: 'center' }}>
            <LinkRouter to={'/libros/'+libro.id}>
            {/* <Button onClick={handleClick}>Ver mas</Button> */}
            <Boton className="info"
              titulo="Ver más"
              mensaje={mensaje}
              title='Atención'
              icon='info'
              
            ></Boton> 
            </LinkRouter>

          </CardActions>

          </Box>
          
        </Card>
      }

    </ThemeProvider>
  );
}
