import React from "react";
import '../estilos/bienvenida.css';
import { Typography } from "@mui/material";
import theme from "./themeConfig";
import { ThemeProvider } from "styled-components";


function Hero() {
    return (
        <>
            <ThemeProvider theme={(theme.palette)}>
                <div className="contenedorHero">
                    <video src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Fproduction_id_4860897%20(2160p).mp4?alt=media&token=e3674003-da01-456a-89f4-a523fb99b85f" autoPlay ></video>
                    <div className="fondo">
                        <div className="slogan">
                          
                            <Typography variant="h4" className="titulo" >Cada libro, una conexión: forma parte de una comunidad de lectores apasionados</Typography>
                        </div>
                    </div>

                </div>

            </ThemeProvider>

        </>
    )
}
export default Hero;