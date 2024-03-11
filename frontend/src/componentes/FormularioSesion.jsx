
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link as LinkRouter } from 'react-router-dom';
import { Button, Typography,CircularProgress } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Password } from "@mui/icons-material";
import AppContext from "../context/AppContext";
import { Navigate } from "react-router-dom";
import Boton from "./Boton";
import BotonArriba from "./BotonArriba";
import Box from '@mui/material/Box';
import Swal from "sweetalert2";
import '../estilos/formulariosesion.css';
import { API_BASE_URL } from "../config";


function FormSesion() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState('');
    const { token, setToken, libroSeleccionado, setLibroSeleccionado, setAutorizado} = useContext(AppContext);
    const [redirigir, setRedirigir] = useState(false);
    const [redirigeCancelar,setRedirigeCancelar] =useState(false)
    const [loading, setLoading]= useState(false)

    const handleClose = () => {
        Swal.fire({
            title: "",
            text: 'Inicio de Sesión Cancelado',
            icon: "info",
        })
            .then(() => {
                limpiarCampos()
                setRedirigeCancelar(true)
                setLibroSeleccionado('')
                setAutorizado(false)
            });
    };
    if (redirigeCancelar) 
    {
        return <Navigate to={`/libros`}  />;
    }
    const limpiarCampos = () => {
        setError('');
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
 
    // activa la validacion al hacer submit
    const handleSubmit = async (event) => {
        console.log('hice clic en iniciar sesion')
        event.preventDefault();
        setError('');
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log('hice clic en iniciar sesion')

        if (email.trim() === '' || password.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            setError("Email inválido, por favor verifique");
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError('La Password debe tener al menos 8 caracteres, al menos una letra y un número');
            return;
        }
        setLoading(true);
        // buscar el usuario en la DB
        try {
            console.log('llame al try')
            const response = await fetch(`${API_BASE_URL}/auth/login`,
            
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })

                });
            if (response.ok) {
                console.log("RESPUESTA OK")
                const data = await response.json()
                setToken(data.jwt)
            }

            else {
                setError('Credenciales inválidas, por favor verifica los datos');
            }
        } catch (error) {
            setError('Error al iniciar sesión. Intenta de nuevo en unos minutos')
        }
        finally {
            setLoading(false); // Establecer loading en false después de completar la solicitud de inicio de sesión
        }
    }
    console.log(libroSeleccionado)

// Redirigir si el usuario ya está autenticado y hay un libro seleccionado
if (token) {
    if (libroSeleccionado) {
        return <Navigate to={`/libros/${libroSeleccionado}`} />;
    } else {
        return <Navigate to="/perfil" />;
    }
}
    
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
                        }}>


                        <TextField
                            required
                            variant="standard"
                            helperText="Ingresa tu email"
                            id="email"
                            label="Email"
                            inputRef={emailRef}
                        />
                        <TextField
                            required
                            type='password'
                            variant="standard"
                            id="password"
                            label="Password"
                            helperText="Ingresa tu Contraseña"
                            inputRef={passwordRef}
                        />
                        {error && <Typography color="error">{error}</Typography>}
                    </Box>
                </div>

                <div className="accionesInicioSesion">
                    <Button type="submit" variant="contained" sx={{backgroundColor:'#79a843'}}>
                    {loading ? <CircularProgress size={24} sx={{color:'white'}} /> : 'Iniciar Sesión'}</Button>
                    <Button onClick={handleClose} variant="contained" sx={{
                                backgroundColor:'rgba(240, 52, 6, 0.945)',
                                
                            }}>Cancelar</Button>
                </div>

            </Box>
<BotonArriba/>
        </>


    )
}
export default FormSesion;