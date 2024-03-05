
import React, { useState } from "react";
import { Link as LinkRouter } from 'react-router-dom';
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



    const handleClose = () => {
        Swal.fire({
            title: "",
            text: 'Inicio de Sesión Cancelado',
            icon: "info",
        })
            .then(() => {
                limpiarCampos()

            });

        // // Limpiar campos al cancelar
        // limpiarCampos()
    };
    const limpiarCampos = () => {
        setError('');
        setDatosForm({ email: "", password: "" });
    }

    // activa la validacion al hacer submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        // Verificar si los campos están llenos
        if (datosForm.email.trim() === '' || datosForm.password.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }


        // Verificar estructura del campo email valido
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

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosForm)

            });
            if (response.ok) {
                const data = await response.json()
            } else {
                setError('Credenciales inválidas, por favor verifica los datos');
            }
        } catch (error) {
            setError('Error al iniciar sesión. Intenta de nuevo en unos minutos')
        };
    }

    // Si pasa las validaciones, enviar la solicitud
    // console.log('inicie sesion')
    // Swal.fire({
    //     title: "Cargando",
    //     text: 'Iniciando Sesión...',
    //     icon: "success",
    //     onClick:{}
    // })

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
                            defaultValue={datosForm.email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            variant="standard"
                            id="password"
                            label="Password"
                            helperText="Ingresa tu Contraseña"
                            defaultValue={datosForm.password}
                            // onChange={(e) => setPassword(e.target.value)}
                            onChange={handleChange}
                        />
                        {error && <Typography color="error">{error}</Typography>}
                    </Box>
                </div>

                <div className="accionesInicioSesion">
                    <LinkRouter to={'/Sesion/perfil'}><Button type="submit">Iniciar Sesión</Button></LinkRouter>

                    <Button onClick={handleClose}>Cancelar</Button>
                </div>

            </Box>

        </>


    )
}
export default FormSesion;