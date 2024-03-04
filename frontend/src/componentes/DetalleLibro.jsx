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
import FormularioIntercambio from "./FormularioIntercambio";


// FALTA ENLAZAR LA IMAGEN
function DetalleLibro() {
    const { id } = useParams(); // Obtiene l ID del libro de la URL
    const [libro, setLibro] = useState();
    const [imagen, setImagen] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);


    const imagenGenerica = 'https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FPortada%20Libro%20Generica.png?alt=media&token=42926409-eb7b-4a16-9298-e6a53d6faee8'

    useEffect(() => {
        fetch(`https://paginascompartidas.fly.dev/api/v1/libros/` + id)

            .then(response => response.json())
            .then(data => setLibro(data))

            .catch(error => console.error('Error:', error));
    }, [id]); // El efecto se ejecuta cada vez que cambia el ID

    const handleClick = () => {
        setMostrarFormulario(true);
        console.log('hice clic en mostrar form')
    }

    // RECUPERANDO IMAGEN
    useEffect(() => {
        if (libro && libro.nombreImagen) {
            const apiUrl = `https://paginascompartidas.fly.dev/api/v1/imagenes/${libro.nombreImagen}`;

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
        <ThemeProvider theme={(theme.palette)}>
            <h1>Detalle Libro</h1>
            {libro ?
                (
                    <>

                        <div className="contenedorInfoDetalle">
                            <div className="detalleIzq">
                                <div className="contenedorCinta"><Typography className="cinta">{libro.genero}</Typography></div>
                                <div className="contenedorImagen">
                                    <img src={imagen} alt='caratula libro' className="zoom"></img>
                                </div>

                            </div>

                            <div className="contenedorTextoDetalle">
                                <div className="contenedorTituloDetalle">
                                    <Typography variant="h1">{libro.titulo}</Typography>
                                    <Typography variant="h5">Autor: {libro.autor}</Typography>
                                </div>

                                <div className="contenedorResenias">
                                    <Resenias />
                                </div>
                                <LineaH color={'#dda15e'} width={'100%'} />
                                <Typography sx={{ textAlign: 'justify', height: '40%' }}>{libro.resumen}</Typography>
                                <div className="contenedorTipsDetalle">
                                    <div className="tipsDetalle">
                                        <div className="infoTipDetalle"> <HomeIcon sx={{ color: 'primary.light' }} /><Typography>Editorial:{libro.editorial}</Typography></div>
                                        <div className="infoTipDetalle"><HomeIcon sx={{ color: 'primary.light' }} /><Typography>ISBN:{libro.isbn}</Typography></div>

                                    </div>
                                    <div className="tipsDetalle">

                                        <div className="infoTipDetalle"><AutoStoriesIcon sx={{ color: 'primary.light' }} /><Typography>Páginas:{libro.paginas}</Typography></div>
                                        <div className="infoTipDetalle"><EditCalendarIcon sx={{ color: 'primary.light' }} /><Typography>Fecha de Publicación:{libro.fechaDePublicacion}</Typography></div>
                                    </div>


                                </div>

                                <div className="contenedorBotonDetalle">
                                    <FormularioIntercambio tituloLibro={libro.titulo} autorLibro={libro.autor} idLibro={libro.id} />
                                    {/* <Boton className={'atencion'} onClick={handleClick} titulo={'Pedir Intercambio'} ></Boton> */}
                                </div>
                                {/* {mostrarFormulario && <FormularioIntercambio tituloLibro={libro.titulo} autorLibro={libro.autor}/>}  */}
                                {/* Renderiza el formulario si mostrarFormulario es true */}
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