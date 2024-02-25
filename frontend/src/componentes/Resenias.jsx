import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import '../estilos/resenias.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { grey } from "@mui/material/colors";

function Resenias(props) {
    const valoracion = props.resenia

    const iconos = [];
    if (valoracion >= 0) {
        for (var i = 0; i < valoracion; i++) {
            iconos.push(<StarIcon sx={{color:'#bc6c25'}} key={`iconos_${i}`} />);
        }
        for (let i = valoracion; i < 5; i++) {
            iconos.push(<StarBorderIcon sx={{color:'gray'}} key={`iconos_${i}`} />);
        }
    } else {
        // Si la valoración no es válida, mostrar iconos de borde
        for (let i = 0; i < 5; i++) {
            iconos.push(<StarBorderIcon sx={{color:'gray'}} key={`iconos_${i}`} />);
        }
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', columGap: '5' }}>
            {iconos}
        </div>
    )
}
export default Resenias;