import React, {useState} from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../estilos/datosUsuario.css'


function DatosUsuario({usuario}) {
   // Estado inicial con los datos de prueba
//    const [usuario, setUsuario] = useState({
//     nombre: 'Usuario Prueba',
//     email: 'usuarioprueba@email.com'
// });

    return (
        <>
        <div className="contenedorFormDatosUsuario">
            <div className="tituloUsuarioPerfil">
                <Typography variant="h2">Mis Datos</Typography>
            </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 3, width: '100%'},
                }}
                noValidate
                autoComplete="on"
                backgroundColor='white'
                className="formularioDatosUsuario"
            >
                <div>
                    <TextField
                        variant="outlined"
                        disabled
                        id="nombre"
                        label="Nombre"
                        defaultValue={usuario.nombre}
                    />
                    <TextField
                        variant="outlined"
                        disabled
                        id="email"
                        label="Email"
                        defaultValue={usuario.email}
                    />
                </div>

            </Box>
        </div>
            
        </>
    )
}

export default DatosUsuario