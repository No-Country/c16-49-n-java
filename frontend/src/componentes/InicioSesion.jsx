import React from "react";
import { Typography } from "@mui/material";
import FormSesion from "./FormularioSesion";
import '../estilos/inicioSesion.css';

function Sesion() {
    return (
        <>
            <h1>Iniciar Sesión</h1>
            <div className="vistaInicioSesion">
                <div className="contenedorGraficoFormSesion" >
                    <div className="contenedorImagenFormSesion">
                        <img src='https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FLogo%20sobre%20moda%20femenina%20minimalista%20neutral%20(2).png?alt=media&token=52394f2f-db85-41aa-8265-80935ea55ba6' alt='logo'></img>
                    </div>
                    <div className="contenedorTextoGraficoFormSesion">
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'semiBold' }}>
                            Estás a unos pasos de Unirte a la nuestra red de Intercambios</Typography>
                    </div>

                </div>
                <div className="contenedorFormulario"><FormSesion /></div>

            </div>


        </>


    )
}
export default Sesion;