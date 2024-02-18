import React from "react";
import '../estilos/infoWeb.css';
import { Typography } from "@mui/material";

function InfoWeb() {
    return (
        <>
            <div className="contenedorGeneral">
                <div className="izquierda">
                    <div className="fondoIzquierda">
                        <Typography>Este es el contenido de la izquierda</Typography>
                    </div>
                </div>
                <div className="derecha"></div>
            </div>
        </>

    )
}
export default InfoWeb;