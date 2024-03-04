import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CargarArchivo from "./CargarArchivo";
import '../estilos/registroUsuarios.css';
import Boton from "./Boton";
import Swal from 'sweetalert2';
import { Password } from "@mui/icons-material";

function Registro() {
    // const [mensaje, setMensaje] = useState(null);
    const [error, setError] = useState('');
    // constantes del usuario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombreImagen, setNombreImagen] = useState('');
    const [fechaCreacion, setFechaCreacion] = useState('');

    const fechaActual = new Date().toISOString().split('T')[0];


    const handleClose = () => {
       
        console.log('hice clic en cerrar')
       
        Swal.fire({
            title: "",
            text: 'Registro Cancelado',
            icon: "info",})
            .then(()=>{
                limpiarCampos()
            
          });
    };
    const limpiarCampos =()=>{
        console.log('llame a limpiar')
        setError('');
        // setMensaje('');
        setNombre('')
        setEmail('')
        setPassword('')
        setNombreImagen('')
        setFechaCreacion('')
    }

    const handleClickForm = (event) => {
        event.preventDefault();
        // Verificar si los campos están llenos
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }

        // Verificar si el formato del email es válido
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!emailRegex.test(email)) {
            setError('Ingrese un email válido');
            return;
        }
        // Validación de la Password al menos 8 caracteres, una letra y un numero
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError('La Password debe tener al menos 8 caracteres, al menos una letra y un número');
            return;
        }

        setError('');
        // Si pasa las validaciones, enviar la solicitud
        console.log('me registre')
        // setMensaje('¡Felicidades! Te registraste con éxito. Inicia Sesión para empezar a intercambiar');
        Swal.fire({
            title: "Felicidades!",
            text: 'Te registraste con éxito. Inicia Sesión para empezar a intercambiar',
            icon: "success"
          });
    }

    return (
        <>
            <h1>Formulario de Registro</h1>
            <div className="contenedorFormRegistro">
                <div className="contenedorGraficoFormRegistro" >
                    <div className="contenedorImagenFormRegistro">
                        <img src='https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FLogo%20sobre%20moda%20femenina%20minimalista%20neutral%20(2).png?alt=media&token=52394f2f-db85-41aa-8265-80935ea55ba6' alt='logo'></img>
                    </div>
                    <div className="contenedorTextoGraficoFormRegistro">
                        <Typography variant="h4" sx={{ color: 'white', fontWeight: 'semiBold' }}>
                            Estás a unos pasos de Unirte a la nuestra red de Intercambios</Typography>
                    </div>

                </div>
                <div className="formCapturaDatos">
                    <Box
                        component="form"
                        onSubmit={handleClickForm}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                        backgroundColor='white'
                    >
                        <div>
                            <Typography variant="h3" color='secondary'>Registro de Usuario</Typography>

                            <Box
                                sx={{
                                    width: '90%',
                                    // display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                    // columnGap: '1%'
                                }}>

                                <TextField

                                    required
                                    id="nombre"
                                    label="Nombre"
                                    variant="standard"
                                    helperText="Escribe tu Nombre"
                                    defaultValue={''}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <TextField

                                    required
                                    variant="standard"
                                    helperText="Escribe tu email"
                                    id="email"
                                    label="Email"
                                    defaultValue={''}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField

                                    required
                                    variant="standard"

                                    id="password"
                                    label="Password"
                                    helperText="Ingresa una Password minimo 8 caracteres, al menos una letra y un número"
                                    defaultValue={''}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <TextField

                                    variant="standard"
                                    disabled
                                    id="fechaCreacion"
                                    label="Fecha de Registro"
                                    defaultValue={fechaActual}

                                />
                                <CargarArchivo required />
                                {error && <Typography color="error">{error}</Typography>}
                            </Box>
                        </div>
                        <div className="accionesRegistrarUsuario">
                            <Button type="submit" variant="contained">Confirmar Registro</Button>
                            <Button variant="contained" onClick={handleClose}>Cancelar</Button>
                        </div>
                    </Box>
                </div>
            </div>
        </>

    )
}
export default Registro;