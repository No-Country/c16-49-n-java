import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import InfoDetalle from './InfoDetalle';
import '../estilos/detalleLibro.css'
import { Typography } from "@mui/material";
import Resenias from "./Resenias";
import LineaH from "./LineaH";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HomeIcon from '@mui/icons-material/Home';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { ThemeProvider } from "styled-components";
import theme from "./themeConfig";
import Boton from './Boton';

// FALTA ENLAZAR LA IMAGEN
function DetalleLibro() {
    const { id } = useParams(); // Obtiene l ID del libro de la URL
    const [libro, setLibro] = useState();


    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/libros/`+id)
        
        .then(response => response.json())
        .then(data => setLibro(data))

        .catch(error => console.error('Error:', error));
    }, [id]); // El efecto se ejecuta cada vez que cambia el ID

    const handleClick = () => {
        console.log('hice clic en pedir intercambio')
    }
    return (
        <ThemeProvider theme={(theme.palette)}>
            <h1>Detalle Libro</h1>
            {libro ?
                (
                    <>

                        <div className="contenedorInfoDetalle">
                            <div className="detalleIzq">
                                <div className="contenedorImagen">
                                    <img src='https://www.inestemple.com/wp-content/uploads/2023/04/img-1207.jpg' alt='caratula libro' className="zoom"></img>
                                </div>
                                <div className="contenedorCinta"><Typography className="cinta">{libro.genero}</Typography></div>
                            </div>

                            <div className="contenedorTextoDetalle">
                                <Typography variant="h1">{libro.titulo}</Typography>
                                <Typography variant="h5">Autor: {libro.autor}</Typography>
                                <div className="contenedorResenias">
                                    {/* renderiza las estrellas */}
                                    <Resenias />
                                    {/* indica la cantidad de puntuaciones */}
                                    <Typography>X {libro.resenias} Valoraciones</Typography></div>
                                <LineaH color={'#dda15e'} width={'100%'} />
                                <Typography sx={{ textAlign: 'justify' }}>{libro.resumen}</Typography>
                                <div className="tipsDetalle">
                                    <HomeIcon sx={{ color: 'primary.light' }} /><Typography>Editorial:{libro.editorial}</Typography>
                                    <HomeIcon sx={{ color: 'primary.light' }} /><Typography>ISBN:{libro.isbn}</Typography>
                                    
                                </div>
                                <div className="tipsDetalle">
                                    
                                    <AutoStoriesIcon sx={{ color: 'primary.light' }} /><Typography>Páginas:{libro.paginas}</Typography>
                                    <EditCalendarIcon sx={{ color: 'primary.light' }} /><Typography>Fecha de Publicación:{libro.fechaDePublicacion}</Typography>
                                </div>
                                <div className="contenedorBotonDetalle">
                                    <Boton className={'atencion'} onClick={handleClick} titulo={'Pedir Intercambio'} ></Boton>
                                </div>

                            </div>

                        </div >
                        <InfoDetalle />

                    </>

                )
                : (
                    <Typography variant="h1">Cargando...</Typography>
                )}

        </ThemeProvider>


    )
}
export default DetalleLibro;