import React from "react";
import { Typography } from "@mui/material";
import '../estilos/perfilUsuario.css'
import TarjetaPerfilUsuario from "./TarjetaPerfilUsuario";
import DatosUsuario from "./DatosUsuario";
import ListaCRUDLibrosUsuario from "./ListaCRUDLibrosUsuario";
import ListaCRUDIntercambios from "./ListaCRUDIntercambios";
function PerfilUsuario() {

    return (
        <>

            <div className="contenedorInicialPerfil">
                <div className="contenedorTarjetaUsuario"><TarjetaPerfilUsuario /></div>
                <div className="contenedorDatosUsuario"><DatosUsuario /></div>

            </div>
            <div className="listasUsuario"><ListaCRUDLibrosUsuario /></div>
            <div className="listasUsuario"><ListaCRUDIntercambios /></div>
        </>
    )
}
export default PerfilUsuario