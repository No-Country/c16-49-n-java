import React from "react";
import '../estilos/catalogo.css';
function Buscar(){
    return(
        <>
        <input type="text" 
            className="form-control" 
            onChange={(e) => Filter(e)} placeholder='Qué estás buscando'
            // value={searchValue}
            >
            </input>
        </>
    )
}

export default Buscar;