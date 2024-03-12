import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import AvatarUsuario from './AvatarUsuario';
import '../estilos/detalleLibro.css';
import { API_BASE_URL } from '../config';
import AppContext from "../context/AppContext";

export default function ListaComentarios() {
    const { token, libroSeleccionado, autorizado} = useContext(AppContext);
    const [comentarios, setComentarios] = useState([]);
    const [error, setError] = useState(null);

    const id = libroSeleccionado
    // useEffect(() => {
    //     fetch(`${API_BASE_URL}/libros/comentarios/libro/` + id)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('No se encontraron comentarios' +response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             if (data && data.status === 404) {
    //                 throw new Error(data.message); // Mensaje de error proporcionado por la API
    //             }
    //             setDataComentario(data);
    //             console.log(dataComentario)
    //             setError(null);
    //         })
    //         .catch(error => setError(error.message));
    // }, [id]);
    useEffect(() => {
        const fetchComentarios = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/libros/comentarios/libro/` + id, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
               
                if (response.ok) {
                    console.log('estoy autorizado a ver comentarios');
                    
                const data = await response.json();
                    console.log(data);
                    setComentarios(data)

                } 
                else {
                    console.log('estoy autorizado a ver comentarios');
                    setComentarios([])
                }
            } catch (error) {
                console.error('Error al obtener comentarios:', error);
            }
        };

        if (id) {
            fetchComentarios();
        }

    }, [id]);

    return (

        <Container maxWidth="xl">
            {error &&

                (<Typography variant="h6" color="error" align="center">
                    {error}
                </Typography>)}




            {comentarios.map((comentario, index) =>
            (<Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flexStart', justifyContent: 'flexStart', textAlign: 'justify', marginBottom: '20px' }}
                key={index}
            >
                <AvatarUsuario />
                <div className='contenedorComentario'>
                    <div className='infoUsuarioComentario'>
                        <Typography variant='h6'>
                            {comentario.nombreUsuario}
                        </Typography>
                        <Typography variant='body1'>Enviado el:
                            {comentario.fechaDeCreacion}
                        </Typography>
                    </div>

                    <Typography>
                        {comentario.contenido}
                        
                    </Typography>
                </div>
            </Box>)
            )}



        </Container>
    );
}