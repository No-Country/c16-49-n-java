import React from "react";
import '../estilos/botones.css'
import Swal from 'sweetalert2';

function Boton(props) {
    const handleClick = () => {
        // Verifica si la prop "mensaje" está definida antes de mostrar la alerta
        if (props.mensaje) {
            // alert(props.mensaje);
            Swal.fire({
                title: "Atencion",
                text: props.mensaje,
                icon: "success"
              }); 
        }

        // Verifica si props.onClick es una función antes de llamarla
        if (typeof props.onClick === 'function') {
            props.onClick();
        }

    }
    return (
        <>
            <button className={props.className} onClick={handleClick}>{props.titulo}</button>
        </>
    )
}
export default Boton;