import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Boton from './Boton'
import { ThemeProvider } from "styled-components";
import theme from "./themeConfig";
import { Typography } from "@mui/material";
import AgregaNuevoLibro from "./AgregaNuevoLibro";
import EditarLibro from "./EditarLibro";

function createData(id, fechaSolicitud, usuarioSolicita, libroSolicitado, libroOfrecido, estadoIntercambio,  acciones) {
    return { id, fechaSolicitud,usuarioSolicita, libroSolicitado, libroOfrecido, estadoIntercambio,  acciones };
}

const intercambio = [
    createData('1',  '03/02/2024','id1',  'LA vidente', 'el cuervo', 'pendiente'),
    createData('2', '03/02/2024','id2',  'LA vidente dos', 'el principito', 'pendiente'),
    createData('3', '03/02/2024', 'id1', 'el principito', 'la vidente 2', 'aceptado'),
];

function ListaCRUDIntercambios() {
    const handleClickEliminar = () => {
        console.log('hice clic en eliminar')
    }
    const handleClickAceptar = () => {
        console.log('hice clic en eliminar')
    }

    return (
        <>
            <ThemeProvider theme={(theme.palette)}>
                <div className="tituloUsuarioPerfil">
                    <Typography variant="h2">Mis Solicitudes Pendientes</Typography>
                </div>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right"><Typography>Fecha de Solicitud</Typography></TableCell>
                                <TableCell align="right"><Typography>Solicitante</Typography></TableCell>
                                <TableCell align="right">Libro Solicitado</TableCell>
                                <TableCell align="right">Libro Ofrecido</TableCell>
                                <TableCell align="right">Estado</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {intercambio.map((intercambio) => (

                                <TableRow
                                    key={intercambio.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{intercambio.id}</TableCell>
                                    <TableCell align="right"> {intercambio.fechaSolicitud}</TableCell>
                                    <TableCell align="right">{intercambio.usuarioSolicita}</TableCell>
                                    <TableCell align="right">{intercambio.libroSolicitado}</TableCell>
                                    <TableCell align="right">{intercambio.libroOfrecido}</TableCell>
                                    <TableCell align="right">{intercambio.estadoIntercambio}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" onClick={handleClickAceptar}>Aceptar</Button>
                                        <Button variant="contained" onClick={handleClickEliminar}>Rechazar</Button>
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </>
    )
}

export default ListaCRUDIntercambios