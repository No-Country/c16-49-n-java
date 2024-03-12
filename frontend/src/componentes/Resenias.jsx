import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import '../estilos/resenias.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { grey } from "@mui/material/colors";
import { Typography } from "@mui/material";
import AppContext from "../context/AppContext";
import { API_BASE_URL } from "../config";

function Resenias() {
    // const { id } = useParams(); // Obtiene l ID del libro de la URL
    const [resenias, setResenias] = useState();
    const [cantResenias, setCantResenias] = useState(0);
    const [reseniasProm, setReseniasProm] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // Nuevo estado para manejar la carga
    const { token, libroSeleccionado } = useContext(AppContext);

    const id = libroSeleccionado
    // verificar autorizacion
    useEffect(() => {
        const fetchResenias = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/libros/${id}/resenias`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    console.log('estoy autorizado a ver resenias');
                    const data = await response.json();
                    console.log(data);
                    setResenias(data);
                    setCantResenias(data.length);
                } else {
                    console.log('no estoy autorizado a ver resenias')
                    setResenias([]);
                }
            } catch (error) {
                console.error('Error al obtener resenias:', error);
            }
        };
        const fetchReseniasProm = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/libros/${id}/resenias/promedio`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    console.log('estoy autorizado a ver prom resenias');
                    const data = await response.json();
                    console.log(data);
                    setReseniasProm(data);

                } else {
                    console.log('no estoy autorizado a ver prom resenias')
                    setReseniasProm(0);
                }
            } catch (error) {
                console.error('Error al obtener promedio de resenias:', error);
            }
        };
        const fetchData = async () => {
            await Promise.all([fetchResenias(), fetchReseniasProm()]);
            setIsLoading(false);
        };

        if ( id) {
            fetchData();
        }

    }, [id]);

    const valoracion = reseniasProm

    const iconos = [];
    if (valoracion > 0) {
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
                {isLoading ? (
                    <Typography>Cargando...</Typography>
                ) : cantResenias === 0 ? (
                    <Typography></Typography>
                ) : (
                    iconos
                )}
                {/* {iconos} */}
            </div>
            {/* indica la cantidad de puntuaciones */}
            {cantResenias === 0 ? (<Typography>Sin Valoraciones</Typography>)
                : cantResenias === 1 ? (<Typography>{cantResenias} Valoración</Typography>)
                    : (<Typography>{cantResenias} Valoraciones</Typography>)}
        </>

    )
}
export default Resenias;