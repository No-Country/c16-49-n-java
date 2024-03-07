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
import '../estilos/listaIntercambioCRUD.css'

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
                                <TableCell align="right"><Typography>Libro Solicitado</Typography></TableCell>
                                <TableCell align="right"><Typography>Libro Ofrecido</Typography></TableCell>
                                <TableCell align="right"><Typography>Estado</Typography></TableCell>
                                <TableCell align="center"><Typography>Acciones</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {intercambio.map((intercambio) => (

                                <TableRow
                                    key={intercambio.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row"><Typography>{intercambio.id}</Typography></TableCell>
                                    <TableCell align="right"><Typography>{intercambio.fechaSolicitud}</Typography> </TableCell>
                                    <TableCell align="right"><Typography>{intercambio.usuarioSolicita}</Typography></TableCell>
                                    <TableCell align="right"><Typography>{intercambio.libroSolicitado}</Typography></TableCell>
                                    <TableCell align="right"><Typography>{intercambio.libroOfrecido}</Typography></TableCell>
                                    <TableCell align="right"><Typography>{intercambio.estadoIntercambio}</Typography></TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" onClick={handleClickAceptar} className="focoB">Aceptar</Button>
                                        <Button variant="contained" onClick={handleClickEliminar} className="focoA">Rechazar</Button>
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