import * as React from 'react';
import { Link } from 'react-router-dom';
import Boton from './Boton';
import '../estilos/botonArriba.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useEffect, useState } from 'react';

function BotonArriba() {
    const [showBoton, setShowBoton] = useState(false)
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        const Scroll = () => {
            const scrollY = window.scrollY;
            setShowBoton(scrollY > 100); // Muestra el botón cuando se haya desplazado 100px hacia abajo
        };
        window.addEventListener('scroll', Scroll);
        return () => {
            window.removeEventListener('scroll', Scroll);
        };
    }, []);
    return (
        showBoton && (
              <Boton className="TopBoton" onClick={ScrollToTop} titulo={<ArrowCircleUpIcon/>}></Boton>
                 )
    )
}

export default BotonArriba;