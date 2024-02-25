import React from "react";
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


function DetalleLibro(libro) {
    const handleClick = () => {
        console.log('hice clic en pedir intercambio')
    }
    return (
        <ThemeProvider theme={(theme.palette)}>
            <h1>Detalle Libro</h1>
            <div className="contenedorInfoDetalle">
                <div className="detalleIzq">
                    <div className="contenedorImagen">
                        <img src='https://www.inestemple.com/wp-content/uploads/2023/04/img-1207.jpg' alt='caratula libro' className="zoom"></img>
                    </div>
                    <div className="contenedorCinta"><Typography className="cinta">Género{libro.genero}</Typography></div>
                </div>

                <div className="contenedorTextoDetalle">
                    <Typography variant="h1">Titulo del Libro {libro.titulo}</Typography>
                    <Typography variant="h5">Autor {libro.autor}</Typography>
                    <div className="contenedorResenias">
                        {/* renderiza las estrellas */}
                        <Resenias />
                        {/* indica la cantidad de puntuaciones */}
                        <Typography>X {libro.resenias} Valoraciones</Typography></div>
                    <LineaH color={'#dda15e'} width={'100%'} />
                    <Typography sx={{ textAlign: 'justify' }}>Resumen: {libro.resumen}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum
                    </Typography>
                    <div className="tipsDetalle">
                        <Typography><HomeIcon sx={{ color: 'primary.light' }} />Editorial:{libro.editorial}XYZ</Typography>
                        <Typography><AutoStoriesIcon sx={{ color: 'primary.light' }} />Páginas:345{libro.paginas}</Typography>
                        <Typography><EditCalendarIcon sx={{ color: 'primary.light' }} />Fecha de Publicación:25/02/2024 {libro.fechaDePublicacion}</Typography>
                    </div>
                    <div className="contenedorBotonDetalle">
                        <Boton className={'atencion'} onClick={handleClick} titulo={'Pedir Intercambio'} ></Boton>
                    </div>

                </div>

            </div >
            <InfoDetalle />
        </ThemeProvider>


    )
}
export default DetalleLibro;