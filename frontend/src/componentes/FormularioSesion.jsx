
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { Link as LinkRouter } from 'react-router-dom';
import { Button, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Password } from "@mui/icons-material";
import Boton from "./Boton";
import Box from '@mui/material/Box';
import Swal from "sweetalert2";
import '../estilos/formulariosesion.css';


function FormSesion() {
    const [datosForm, setDatosForm] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState('');
    const SesionExitosa = () => {
        const history = useHistory()


        const redirigirAPerfil = () => {
            history.push('/Sesion/perfil');
        }
    };


    const handleClose = () => {
        Swal.fire({
            title: "",
            text: 'Inicio de Sesión Cancelado',
            icon: "info",
        })
            .then(() => {
                limpiarCampos()

            });

        // Limpiar campos al cancelar
        limpiarCampos()
    };
    const limpiarCampos = () => {
        setError('');
        setDatosForm({ email: "", password: "" });
    }
    // activa la validacion al hacer submit
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        // Verificar si los campos están llenos
        if (datosForm.email.trim() === '' || datosForm.password.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }


        // Verificar el campo email
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(datosForm.email)) {
            setError("Email inválido, por favor verifique");
            return;
        }

        // Validación de la Password al menos 8 caracteres, una letra y un numero
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(datosForm.password)) {
            setError('La Password debe tener al menos 8 caracteres, al menos una letra y un número');
            return;
        }

        // Si pasa las validaciones, enviar la solicitud
        console.log('inicie sesion')
        Swal.fire({
            title: "Cargando",
            text: 'Iniciando Sesión...',
            icon: "success",
            onClick:{}
        })

    };
    const handleChange = (event) => {
        setDatosForm({ ...datosForm, [event.target.id]: event.target.value });
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                }}
                noValidate
                autoComplete="off"
                backgroundColor='white'
            >
                <div>
                    <Typography variant="h3" color='secondary'>Inicio de Sesión</Typography>

                    <Box
                        sx={{
                            width: '90%',
                            // display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                            // columnGap: '1%'
                        }}>


                        <TextField
                            required
                            variant="standard"
                            helperText="Ingresa tu email"
                            id="email"
                            label="Email"
                            defaultValue={''}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            variant="standard"
                            id="password"
                            label="Password"
                            helperText="Ingresa tu Contraseña"
                            defaultValue={''}
                            // onChange={(e) => setPassword(e.target.value)}
                            onChange={handleChange}
                        />
                        {error && <Typography color="error">{error}</Typography>}
                    </Box>
                </div>

                <div className="accionesInicioSesion">
                    <Button type="submit">Iniciar Sesión</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                </div>

            </Box>

        </>


    )
}
export default FormSesion;