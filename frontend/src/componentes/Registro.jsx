import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CargarArchivo from "./CargarArchivo";
import { Navigate } from "react-router-dom";
import BotonArriba from "./BotonArriba";
import '../estilos/registroUsuarios.css';
import Boton from "./Boton";
import Swal from 'sweetalert2';
import { Password } from "@mui/icons-material";
import { API_BASE_URL } from "../config";

function Registro() {
    const [error, setError] = useState('');
    const [redirigir, setRedirigir] = useState(false);
    // constantes del usuario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword]=  useState('');

   
    const handleClose = () => {
        Swal.fire({
            title: "",
            text: 'Registro Cancelado',
            icon: "info",
        })
            .then(() => {
                limpiarCampos()
                setRedirigir(true)

            });
    };
    if (redirigir) 
        {
            return <Navigate to={`/libros`}  />;
        }
    
    const limpiarCampos = () => {
        setError('');
        setNombre('')
        setEmail('')
        setPassword('')
        setRepeatedPassword('')
    }

    const handleClickForm = async (event) => {
        event.preventDefault();
        console.log(nombre,email,password, repeatedPassword)
        // Verificar si los campos están llenos
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || repeatedPassword.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }

        // Verificar si el formato del email es válido
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!emailRegex.test(email)) {
            setError('Ingrese un email válido');
            return;
        }
        // comprobar que ambas contraseñas coinciden 
        if (password !== repeatedPassword) {
            setError('Las contraseñas no coinciden');
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
        console.log('me puedo registrar')
        try {
            // Enviar datos a la API
            const response = await fetch(`${API_BASE_URL}/usuarios/registro`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre, email, password, repeatedPassword
                })
            });
    
            // Verificar si la solicitud fue exitosa
            if (response.ok){
                
                Swal.fire({
                    title: "Felicidades!",
                    text: 'Te registraste con éxito. Inicia Sesión para empezar a intercambiar',
                    icon: "success"
                });
        
                // Limpiar campos después del registro exitoso
                limpiarCampos();
            }
            else {
                setError('Error al enviar datos a la API');
            }
            
        } catch (error) {
            console.error('Error:', error.message);
            setError('Hubo un error al registrar el usuario. Por favor, intenta nuevamente más tarde.');
        }
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
                                sx={{  width: '90%',
                                }}>

                                <TextField

                                    required
                                    id="nombre"
                                    label="Nombre"
                                    variant="standard"
                                    helperText="Escribe tu Nombre"
                                    // defaultValue={''}
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <TextField

                                    required
                                    variant="standard"
                                    helperText="Escribe tu email"
                                    id="email"
                                    label="Email"
                                    value={email}
                                    // defaultValue={''}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField

                                    required
                                    variant="standard"
                                    type="password"
                                    id="password"
                                    label="Password"
                                    helperText="Ingresa una Password minimo 8 caracteres, al menos una letra y un número"
                                    value={password}
                                    // defaultValue={''}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <TextField

                                    required
                                    variant="standard"
                                    type="password"
                                    id="passwordRepeat"
                                    label="Repita Password"
                                    helperText="Escriba nuevamente la contraseña"
                                    value={repeatedPassword}
                                    // defaultValue={''}
                                    onChange={(e) => setRepeatedPassword(e.target.value)}
                                />
                                {/* <TextField

                                    variant="standard"
                                    disabled
                                    id="fechaCreacion"
                                    label="Fecha de Registro"
                                    defaultValue={fechaActual}

                                />
                                <CargarArchivo required /> */}
                                {error && <Typography color="error">{error}</Typography>}
                            </Box>
                        </div>
                        <div className="accionesRegistrarUsuario">
                            <Button type="submit" variant="contained" sx={{
                                backgroundColor:'#79a843'
                            }}>Confirmar Registro</Button>
                            <Button variant="contained" onClick={handleClose} sx={{
                                backgroundColor:'rgba(240, 52, 6, 0.945)',
                                
                            }}>Cancelar</Button>
                        </div>
                    </Box>
                </div>
            </div>
            <BotonArriba />
        </>

    )
}
export default Registro;