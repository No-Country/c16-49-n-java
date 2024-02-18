import React from "react";
import TarjetaLibro from './TarjetaLibro';
import '../estilos/catalogo.css';
import BotonArriba from "./BotonArriba";
import Buscar from "./Buscar";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Catalogo() {
    return (
        <>

            <div className="contenedorCatalogo">
                <div className="contenedorBusqueda">
                    <h1>Catálogo de Librossss</h1>
                    <div className="inputBuscar">
                        <Buscar />
                        <div className="contenedorLupa"><SearchSharpIcon /></div>
                      
                    </div>
                </div>
                <div className="contenedorCategorias">Filtros de categorías</div>
                <div className="contenedorTarjetas"><TarjetaLibro /></div>
            </div>

            <BotonArriba />
        </>

    )
}
export default Catalogo;