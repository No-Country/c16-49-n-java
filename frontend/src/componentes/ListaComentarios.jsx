import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import AvatarUsuario from './AvatarUsuario';
import '../estilos/detalleLibro.css';

export default function ListaComentarios() {
    const { id } = useParams(); // Obtiene l ID del libro de la URL
    const [dataComentario, setDataComentario] = useState();
    // useEffect(() => {
    //     fetch(`https://paginascompartidas.fly.dev/api/v1/libros/comentarios/libro/1` + id)

    //         .then(response => response.json())
    //         .then(data => setDataComentario(data))
    //     console.log(dataComentario)
    //         .catch(error => console.error('Error:', error));
    // }, [id]); // El efecto se ejecuta cada vez que cambia el ID

    return (

        <Container maxWidth="xl">
            {/* {dataComentario.length > 0 &&
                (dataComentario.map((comentario, index) => ( */}
            <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'flexStart', justifyContent: 'flexStart', textAlign: 'justify', marginBottom: '20px' }}
            // key={index} comentario={comentario}
            >
                <AvatarUsuario />
                <div className='contenedorComentario'>
                    <div className='infoUsuarioComentario'>
                        <Typography variant='body1'>Nombre Usuario
                            {/* {comentario.usuario} */}
                        </Typography>
                        <Typography variant='body2'>Enviado el:
                            {/* {comentario.fechaCreacion} */}
                        </Typography>
                    </div>

                    <Typography>
                        {/* {comentario.contenido} */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minima reiciendis fugiat sit quis similique corporis, voluptatibus, architecto
                        iure dignissimos quisquam eos delectus ipsum doloribus.
                        Numquam officia nostrum beatae iusto. Doloribus.</Typography>
                </div>
            </Box>
            {/* )))
            } */}

        </Container>
    );
}