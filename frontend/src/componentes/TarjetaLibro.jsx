import * as React from 'react';
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
import '../estilos/tarjetaLibros.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TarjetaLibro() {
  const [dataLibros, setDataLibros] = useState([])

  useEffect(() => {
    axios
      .get('https://www.dbooks.org/api/recent')
      .then((response) => setDataLibros(response.data.books))

  }, []);

  return (

    <ThemeProvider theme={(theme.palette, theme.typography)}>
      <>

        {dataLibros.length > 0 ?

          (dataLibros.map((libro, index) => {
            return (
              <Card sx={{ width: 200, height: 320, justifyContent:'space-between'}} key={index}>
                <CardMedia
                  component="img"
                  alt="caratula libro"
                  height= "160"
                  image={libro.image}
                />
                <CardContent sx={{ height: 112}}>
                  <Typography gutterBottom variant="body2" component="div" style={{textAlign:'left'}}>
                    Autor:{libro.authors}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {libro.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ height: 48, justifyContent:'center'}}>
                  <Boton className="info" titulo="Ver más" mensaje="Registrate para ver mas informacion"></Boton>
                  {/* <Boton className="accion" titulo="Lo quiero" mensaje="Inicia Sesion o Registrate para pedir intercambio"></Boton> */}
                  {/* agregarle acciones a los botones para llamar a funciones
                  <Boton className="info" titulo="Ver más" mensaje="Producto agregado al carrito" onClick={handleVerDetalle}></Boton>
                  <Boton className="accion" titulo="Lo quiero" mensaje="Producto agregado al carrito" onClick={handleRegistrarse}></Boton> */}
                 
                </CardActions>
              </Card>
            )
          }))
          :
          <Box>Buscando Libros</Box>
        }
          </>
       
        </ThemeProvider>)
}
