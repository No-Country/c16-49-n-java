import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Typography } from "@mui/material";
import '../estilos/perfilUsuario.css'
import TarjetaPerfilUsuario from "./TarjetaPerfilUsuario";
import DatosUsuario from "./DatosUsuario";
import ListaCRUDLibrosUsuario from "./ListaCRUDLibrosUsuario";
import ListaCRUDIntercambios from "./ListaCRUDIntercambios";
import BotonArriba from "./BotonArriba";
import { API_BASE_URL } from "../config";

function PerfilUsuario() {
    const { token } = useContext(AppContext)
    const [autorizado, setAutorizado] = useState(false);
    const [loading, setLoading] = useState(true);
    const {usuario, setUsuario}= useContext(AppContext)

    useEffect(() => {
        const verificarAutorizacion = async () => {
          try {
            const response = await fetch(`${API_BASE_URL}/auth/perfil`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
    
            if (response.ok) {
                console.log('estoy autorizado')
                const data = await response.json()
                setUsuario(data)
                console.log(data)
                
              setAutorizado(true);
            } else {
                console.log('no estoy autorizado')
              setAutorizado(false);
            }
          } catch (error) {
            console.error('Error al verificar autorización:', error);
          } finally {
            setLoading(false);
          }
        };
    
        if (token) {
          verificarAutorizacion();
        }
      }, [token]);
      // console.log(usuario.libros)
      if (!token) {
        return <Navigate to='/sesion' />;
      }
    
      if (loading) {
        return <div>Cargando...</div>;
      }
    
      if (!autorizado) {
        return <div>No tienes permiso para acceder a esta vista. Por favor Registrate</div>;
      }


    return (
        <>

            <div className="contenedorInicialPerfil">
                <div className="contenedorTarjetaUsuario"><TarjetaPerfilUsuario usuario={usuario} /></div>
                <div className="contenedorDatosUsuario"><DatosUsuario usuario={usuario}/></div>

            </div>
            <div className="listasUsuario"><ListaCRUDLibrosUsuario libros={usuario.libros}/></div>
            <div className="listasUsuario"><ListaCRUDIntercambios /></div>
            <BotonArriba />
        </>
    )
}
export default PerfilUsuario