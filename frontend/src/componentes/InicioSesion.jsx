import React from "react";
import FormSesion from "./FormularioSesion";
import '../estilos/inicioSesion.css';

function Sesion() {
    return (
        <>
            
            <div className="vistaInicioSesion">
                <div className="figuraSesion">aca va una imagen</div>
                <div className="contenedorFormulario"><FormSesion /></div>
                
            </div>


        </>


    )
}
export default Sesion;