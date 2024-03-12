import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import AppContext from "../context/AppContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import { Box } from '@mui/material';
import '../estilos/tarjetaLibros.css';
import { API_BASE_URL } from '../config';
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";



export default function TarjetaLibro({ libro }) {
  // console.log(libro)
  const { token, setLibroSeleccionado, libroSeleccionado } = useContext(AppContext)
  const [navegarADetalles, setNavegarADetalles] = useState(false)
  const [navegarASesion, setNavegarASesion] = useState(false)
  const [imagen, setImagen] = useState(null);


  const imagenGenerica = 'https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FPortada%20Libro%20Generica.png?alt=media&token=42926409-eb7b-4a16-9298-e6a53d6faee8'

  useEffect(() => {
    if (libro && libro.nombreImagen) {
      const apiUrl = `${API_BASE_URL}/imagenes/${libro.nombreImagen}`;

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


  const handleClick = () => {
    // setLibroSeleccionado(libro.id)
    if (token) {
      setLibroSeleccionado(libro.id)
      console.log('hice clic en el libro' + libroSeleccionado)
      setNavegarADetalles(true)
      // setLibroSeleccionado(libro.id)

      // setNavegarADetalles(true)
    }
    else {
      setLibroSeleccionado(libro.id)
      Swal.fire({
        title: "",
        text: 'Inicia sesión para ver más informacion',
        icon: "info",
      })
        .then(() => {
          setNavegarASesion(true)
        });
    }
  }
  if (navegarASesion) {
    return <Navigate to={'/sesion'} />
  }
  if (navegarADetalles) {
    return <Navigate to={'/libros/' + libroSeleccionado} />
  }

  return (


    <ThemeProvider theme={(theme.palette, theme.typography)}>
      {
        libro &&
        <Card sx={{ width: '30%', height: 300, justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
          <CardMedia
            component="img"
            alt="caratula libro"
            height="100%"
            width='30%'
            image={imagen ? imagen : imagenGenerica}
          />
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '70%' }}>
            <CardContent sx={{ height: '70%', display: 'flex', flexDirection: 'column', width: '100%' }} style={{ textAlign: 'left' }}>

              <Typography variant="h5" color="secondary.dark">
                {libro.titulo}
              </Typography>
              <Typography gutterBottom variant="body2" component="div" style={{ textAlign: 'left', marginTop: '20px' }}>

                Autor:{libro.autor.length > 25 ? `${libro.author.slice(0, 25)}...` : libro.autor}
              </Typography>
            </CardContent>
            <CardActions sx={{ height: '30%', justifyContent: 'center' }}>
              <Button onClick={handleClick}>Ver mas</Button>
            </CardActions>

          </Box>

        </Card>
      }

    </ThemeProvider>
  );
}
