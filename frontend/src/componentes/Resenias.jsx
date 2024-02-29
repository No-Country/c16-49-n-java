import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import '../estilos/resenias.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { grey } from "@mui/material/colors";
import { Typography } from "@mui/material";

function Resenias() {
    const { id } = useParams(); // Obtiene l ID del libro de la URL
    const [resenias, setResenias] = useState();
    const [cantResenias, setCantResenias] = useState();

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/libros/${id}/resenias`)
            .then(response => response.json())

            .then(data => {setResenias(data[0].calificacion),
                setCantResenias(data.length)})

            .catch(error => console.error('Error:', error));
    }, [id]);

    const valoracion = resenias

    const iconos = [];
    if (valoracion >= 0) {
        for (var i = 0; i < valoracion; i++) {
            iconos.push(<StarIcon sx={{ color: '#bc6c25' }} key={`iconos${i}`} />);
        }
        for (let i = valoracion; i < 5; i++) {
            iconos.push(<StarBorderIcon sx={{ color: 'gray' }} key={`iconos${i}`} />);
        }
    } else {
        // Si la valoración no es válida, mostrar iconos de borde
        for (let i = 0; i < 5; i++) {
            iconos.push(<StarBorderIcon sx={{ color: 'gray' }} key={`iconos${i}`} />);
        }
    }


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', columGap: '5' }}>
                {iconos}
            </div>
            {/* indica la cantidad de puntuaciones */}
            <Typography>{cantResenias} Valoraciones</Typography>
        </>

    )
}
export default Resenias;