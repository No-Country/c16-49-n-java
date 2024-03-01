import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Boton from "./Boton";


function FormularioIntercambio({ tituloLibro, autorLibro }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');



    const handleClick = (event) => {
        event.preventDefault();
        // Verificar si los campos están llenos
        if (nombre.trim() === '' || email.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }

        // Verificar si el formato del email es válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Ingrese un email válido');
            return;
        }

        // Si pasa las validaciones, enviar la solicitud
        setMensaje('Solicitud enviada con éxito. Serás contactado al mail registrado.');
    }

return (
    <>
        <Typography>Solicitud de Intercambio</Typography>

        <Box
            component="form"
            onSubmit={handleClick}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '80%' },
            }}
            noValidate
            autoComplete="on"
        >
            <div>

                <TextField
                    variant="outlined"
                    disabled
                    id="titulo"
                    label="Titulo del Libro"
                    defaultValue={tituloLibro}
                />
                <TextField
                    variant="outlined"
                    disabled
                    id="autor"
                    label="Autor del Libro"
                    defaultValue={autorLibro}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Nombre"
                    defaultValue={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <TextField
                    id="outlined-helperText"
                    label="Email"
                    defaultValue={email}
                    helperText="Escribe tu mail de contacto"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <Typography color="error">{error}</Typography>}
            </div>
            <Boton className={'accion'} type="submit" titulo={'Enviar Solicitud'} mensaje={mensaje} icon={'success'}></Boton>

        </Box>

    </>
)

}
export default FormularioIntercambio