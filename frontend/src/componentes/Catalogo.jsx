import React, { useContext } from "react";
import TarjetaLibro from './TarjetaLibro';
import '../estilos/catalogo.css';
import BotonArriba from "./BotonArriba";
import Buscar from "./Buscar";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { ThemeProvider } from "styled-components";
import theme from "./themeConfig";
import { Typography } from "@mui/material";
import AppContext from "../context/AppContext";
import Button from '@mui/material/Button';

function Catalogo() {
    const { dataLibros, resultadosBusqueda, setResultadosBusqueda } = useContext(AppContext);
    const handleLimpiarBusqueda = () => {
        setResultadosBusqueda([]);
    };
    return (
        <>
            <ThemeProvider theme={(theme.palette)}>
                <div className="contenedorCatalogo">
                    <div className="contenedorBusqueda">
                        <Typography variant="h1">Catálogo de Libros</Typography>
                        {resultadosBusqueda.length > 0 && (
                            // Renderiza el botón solo si hay resultados de búsqueda
                            <Button variant="contained" color="primary" onClick={handleLimpiarBusqueda}>
                                Limpiar Búsqueda
                            </Button>
                        )}
                    </div>
                    <div className="contenedorTarjetas">
                        {resultadosBusqueda.length > 0 ?
                            (resultadosBusqueda.map((libro, index) => (
                                <TarjetaLibro key={index} libro={libro} />
                            )))


                            :
                            (dataLibros.map((libro, index) => (
                                <TarjetaLibro key={index} libro={libro} />
                            )))
                        }
                        <TarjetaLibro />
                    </div>
                </div>
                <BotonArriba />
            </ThemeProvider>

        </>

    )
}
export default Catalogo;