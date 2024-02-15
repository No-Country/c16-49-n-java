import React from "react";
import TarjetaLibro from './TarjetaLibro';
import '../estilos/catalogo.css';
import BotonArriba from "./BotonArriba";
import Buscar from "./Buscar";
function Catalogo() {
    return (
        <>

            <div className="contenedorCatalogo">
                <div className="contenedorBusqueda">
                    <h1>Catalogo de libros</h1>
                    <div className="inputBuscar"><Buscar /></div>
                </div>
                <div className="contenedorCategorias">Filtros de categorias</div>
                <div className="contenedorTarjetas"><TarjetaLibro /></div>
            </div>

<BotonArriba />
        </>

    )
}
export default Catalogo;