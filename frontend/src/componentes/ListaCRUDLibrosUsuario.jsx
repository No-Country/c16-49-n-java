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


function createData(id, imagen, titulo, autor, acciones) {
    return { id, imagen, titulo, autor, acciones };
}

const libros = [
    createData('1', 'foto1', 'titulo1', 'autor1'),
    createData('2', 'foto2', 'titulo2', 'autor2'),
    createData('3', 'foto3', 'titulo3', 'autor3'),
];


function ListaCRUDLibrosUsuario() {

    const handleClickEliminar = () => {
        console.log('hice clic en eliminar')
    }
    return (
        <>
            <ThemeProvider theme={(theme.palette)}>
            <div className="tituloUsuarioPerfil">
                <Typography variant="h2">Mi Librería Virtual</Typography>
            </div>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right"><Typography>Caratula</Typography></TableCell>
                                <TableCell align="right">Titulo del Libro</TableCell>
                                <TableCell align="right">Autor</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {libros.map((libro) => (

                                <TableRow
                                    key={libro.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    </TableCell>
                                    <TableCell align="right">
                                        <div className="contenedor_imagenListaLibrosUsuario"><img src={libro.imagen} alt='caratula del libro' /></div>
                                    </TableCell>


                                    <TableCell align="right">{libro.titulo}</TableCell>
                                    <TableCell align="right">{libro.autor}</TableCell>
                                    <TableCell align="right">
                                        <EditarLibro />
                                        <Button variant="contained" onClick={handleClickEliminar}>Eliminar</Button>
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div><AgregaNuevoLibro /></div>
            </ThemeProvider>

        </>
    )
}

export default ListaCRUDLibrosUsuario