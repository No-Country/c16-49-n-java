import React from "react";
import TarjetaLibro from './TarjetaLibro';
import '../estilos/catalogo.css';
import BotonArriba from "./BotonArriba";
import Buscar from "./Buscar";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { ThemeProvider } from "styled-components";
import theme from "./themeConfig";
import { Typography } from "@mui/material";


function Catalogo() {
  

    return (
        <>
            <ThemeProvider theme={(theme.palette)}>
                <div className="contenedorCatalogo">
                    <div className="contenedorBusqueda">
                        <h1>Catálogo de Libros</h1>
                    </div>
                    <div className="contenedorTarjetas">
                    <TarjetaLibro />
                    </div>
                </div>
                <BotonArriba />
            </ThemeProvider>

        </>

    )
}
export default Catalogo;