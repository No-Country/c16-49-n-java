import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Boton from "./Boton";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import '../estilos/formularioIntercambio.css';

function FormularioIntercambio({ idLibro, tituloLibro, autorLibro }) {
    // codigo del popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mensaje, setMensaje] = useState(null);



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        // setMensaje(''); // Limpiar el mensaje al cerrar
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // constantes del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [libroOfrecido, setLibroOfrecido] = useState('');
    const [fechaSolicitud, setFechaSolicitud]= useState('')
    const [error, setError] = useState('');

    const fechaActual = new Date().toISOString().split('T')[0];


    const handleClickForm = (event) => {
        event.preventDefault();
        // Verificar si los campos están llenos
        if (nombre.trim() === '' || email.trim() === '' || libroOfrecido.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }

        // Verificar si el formato del email es válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Ingrese un email válido');
            return;
        }
        setError('');
        // Si pasa las validaciones, enviar la solicitud
        setMensaje('Solicitud enviada con éxito. Serás contactado al mail registrado.');
        setNombre('');
        setEmail('');
        handleClose()
    }

    return (
        <>

            <div>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Solicitar Intercambio
                </Button>
                <Popover
                    id={id}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    // onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >





                    <div className="contenedorGeneralPopover">

                        <div className="contenedorGraficoFormIntercambio" >
                            <div className="contenedorImagenFormInytercambio">
                                <img src='https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FLogo%20sobre%20moda%20femenina%20minimalista%20neutral%20(2).png?alt=media&token=52394f2f-db85-41aa-8265-80935ea55ba6' alt='logo'></img>
                            </div>
                            <div className="contenedorTextoGraficoFormIntercambio"></div><Typography variant="h4" sx={{ color: 'white', fontWeight: 'semiBold' }}>Estás a unos pasos de empezar a intercambiar libros y conectar con lectores apasionados como tú</Typography>
                        </div>

                        <Box
                            component="form"
                            onSubmit={handleClickForm}
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '80%' },
                            }}
                            noValidate
                            autoComplete="on"
                            backgroundColor='white'
                        >
                            <div>
                                <Typography variant="h3" color='secondary'>Solicitud de Intercambio</Typography>
                                <Typography>Libro Deseado</Typography>
                                <Box
                                    sx={{
                                        width: '(calc(100%/3))',
                                        display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                        columnGap: '1%'
                                    }}>

                                    <TextField
                                        variant="standard"
                                        disabled
                                        id="id"
                                        label="id Libro"
                                        defaultValue={idLibro}
                                    />
                                    <TextField
                                        variant="standard"
                                        disabled
                                        id="titulo"
                                        label="Titulo del Libro"
                                        defaultValue={tituloLibro}
                                    />
                                    <TextField
                                        variant="standard"
                                        disabled
                                        id="autor"
                                        label="Autor del Libro"
                                        defaultValue={autorLibro}
                                    />
                                    {/* <TextField
                                        variant="standard"
                                        disabled
                                        id="autor"
                                        label="Autor del Libro"
                                        defaultValue={autorLibro}
                                    /> */}

                                </Box>
                                <Typography>Solicitante</Typography>
                                <Box
                                    sx={{
                                        width: '(calc(100%/2))',
                                        display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                        columnGap: '1%'
                                    }}>
                                    <TextField
                                    variant="standard"
                                        required
                                        id="nombre"
                                        label="Nombre"
                                        defaultValue={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    <TextField
                                    variant="standard"
                                        required
                                        id="email"
                                        label="Email"
                                        defaultValue={email}
                                        helperText="Escribe tu mail de contacto"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        width: '(calc(100%/2))',
                                        display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                        columnGap: '1%'
                                    }}>
                                    <TextField
                                    variant="standard"
                                        required
                                        id="libroOfrecido"
                                        label="libroOfrecido"
                                        defaultValue={libroOfrecido}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                    <TextField
                                        variant="standard"
                                        disabled
                                        id="fechaSolicitud"
                                        label="Fecha de Solicitud"
                                        defaultValue={fechaActual}
                                        
                                    />
                                </Box>

                                {error && <Typography color="error">{error}</Typography>}
                            </div>
                            <div className="accionesAgregarLibro">
                                <Boton className={'info'} titulo={'Cancelar'} mensaje={'Accion Cancelada'} icon={'info'} onClick={handleClose}></Boton>
                                <Boton className={'accion'} type="submit"
                                    titulo={'Enviar Solicitud'} mensaje={mensaje} icon={'success'}></Boton>
                            </div>


                        </Box>

                    </div>





                </Popover>
            </div>
        </>
    )

}
export default FormularioIntercambio