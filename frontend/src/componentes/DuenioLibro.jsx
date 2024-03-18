import * as React from 'react';
import { useContext, useState, useEffect} from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { API_BASE_URL } from '../config';
import AppContext from "../context/AppContext";

function DuenioLibro() {
    const { token, libroSeleccionado, autorizado } = useContext(AppContext);
    const [duenio, setDuenio] = useState('')
    const id = libroSeleccionado

    useEffect(() => {
        const fetchDuenio = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/libros/${id}/usuario`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    console.log('estoy autorizado a ver dueño del libro');

                    const data = await response.json();
                   setDuenio(data)


                }
                else {
                    console.log('no estoy autorizado a ver el dueño');

                }
            } catch (error) {
                console.error('Error al obtener dueño:', error);
            }
        };

        if (id) {
            fetchDuenio();
        }

    }, [id]);

    return (
        <>
            <Card variant="outlined" sx={{ maxWidth: 360 }}>
                <Box sx={{ p: 2 }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography gutterBottom variant="body1" component="div">
                          Este libro es propiedad de:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                           {duenio.nombre}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div"></Typography>
                    </Stack>
                    <Typography color="text.secondary" variant="body1">
                        Contacta a este usuario para intercambiar
                    </Typography>
                </Box>
                <Divider />
            </Card>
        </>
    )
}
export default DuenioLibro