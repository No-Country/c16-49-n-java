import React from "react";
import '../estilos/catalogo.css';
function Buscar(){
    return(
        <>
        <input type="text" 
            className="form-control" 
            onChange={(e) => Filter(e)} placeholder='Busca tu Libro Favorito'
            // value={searchValue}
            >
            </input>
        </>
    )
}

export default Buscar;