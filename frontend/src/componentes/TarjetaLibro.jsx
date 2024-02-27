import * as React from 'react';
import { useEffect, useState} from 'react';
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
  const handleClick = (event, id) => {
    console.log('hice click en el boton ver del id'+{id})
};
  const [imagen, setImagen] = useState(null);
  
  const imagenGenerica = 'https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FPortada%20Libro%20Generica.png?alt=media&token=42926409-eb7b-4a16-9298-e6a53d6faee8'

  useEffect(() => {
    if (libro && libro.nombreImagen) {
      const apiUrl = `http://localhost:8080/api/v1/imagenes/${libro.nombreImagen}`;

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
        <Card sx={{ width: 200, height: 320, justifyContent: 'space-between' }}>
          <CardMedia
            component="img"
            alt="caratula libro"
            height="200"
          image={imagen ? imagen : imagenGenerica}
          />
          <CardContent sx={{ height: 80 }}>
            <Typography gutterBottom variant="body2" component="div" style={{ textAlign: 'left' }}>
              {/* Autor:{libro.autor.length > 25 ? `${libro.autor.slice(0, 25)}...` : libro.autor} */}
              Autor:{libro.autor.length > 25 ? `${libro.author.slice(0, 25)}...` : libro.autor}
            </Typography>
            <Typography variant="h5" color="secondary.dark">
              {libro.titulo}
            </Typography>
          </CardContent>
          <CardActions sx={{ height: 40, justifyContent: 'center' }}>
            <LinkRouter to={'/Libro/'+ libro.id}>
            <Boton className="info" 
            titulo="Ver más" 
            mensaje="Registrate para ver más informacion" 
            title='Atención'
            icon='info'
            ></Boton>
            </LinkRouter>
            
          </CardActions>
        </Card>
      }

    </ThemeProvider>
  );
}
