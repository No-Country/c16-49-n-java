import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import AvatarUsuario from './AvatarUsuario';
import '../estilos/detalleLibro.css';
import { API_BASE_URL } from '../config';

export default function ListaComentarios() {
    const { id } = useParams(); // Obtiene l ID del libro de la URL
    const [dataComentario, setDataComentario] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/libros/comentarios/libro/` + id)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se encontraron comentarios' +response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.status === 404) {
                    throw new Error(data.message); // Mensaje de error proporcionado por la API
                }
                setDataComentario(data);
                console.log(dataComentario)
                setError(null);
            })
            .catch(error => setError(error.message));
    }, [id]);

    return (

        <Container maxWidth="xl">
            {error &&

                (<Typography variant="h6" color="error" align="center">
                     {error}
                </Typography>)}



            
                {dataComentario.map((comentario, index) => 
                    (<Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flexStart', justifyContent: 'flexStart', textAlign: 'justify', marginBottom: '20px' }}
            key={index} 
            >
                <AvatarUsuario />
                <div className='contenedorComentario'>
                    <div className='infoUsuarioComentario'>
                        <Typography variant='body1'>Nombre Usuario
                            {comentario.usuario}
                        </Typography>
                        <Typography variant='body2'>Enviado el:
                            {comentario.fechaCreacion}
                        </Typography>
                    </div>

                    <Typography>
                        {comentario.contenido}
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima reiciendis fugiat sit quis similique corporis, voluptatibus, architecto
                        iure dignissimos quisquam eos delectus ipsum doloribus.
                        Numquam officia nostrum beatae iusto. Doloribus. */}
                        </Typography>
                </div>
            </Box>)
            )}
            


        </Container>
    );
}