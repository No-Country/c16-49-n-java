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
import { Box, Typography } from "@mui/material";
import AgregaNuevoLibro from "./AgregaNuevoLibro";
import EditarLibro from "./EditarLibro";


function createData(id, imagen, titulo, autor, acciones) {
    return { id, imagen, titulo, autor, acciones };
}


function ListaCRUDLibrosUsuario({ usuario }) {

    const handleClickEliminar = () => {
        console.log('hice clic en eliminar')
    }
    return (
        <>
            <ThemeProvider theme={(theme.palette)}>
                <div className="tituloUsuarioPerfil">
                    <Typography variant="h2">Mi Librería Virtual</Typography>
                </div>
                {usuario.libros.length > 0 ?
                    (<TableContainer component={Paper} >
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
                                {usuario.libros.map((libro) => (

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
                                            <Button variant="contained" onClick={handleClickEliminar} sx={{
                                backgroundColor:'rgba(240, 52, 6, 0.945)',
                                
                            }}>Eliminar</Button>
                                        </TableCell>


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>)
                :
                (
                    <>
                    
                    <Box sx={{height:'60px', backgroundColor:'white', flexDirection:'row', alignItems:'center'}}><Typography variant="h3">Aún no tienes libros cargados</Typography></Box>
                <div><AgregaNuevoLibro /></div>
                    </>
                )}
            </ThemeProvider>

        </>
    )
}

export default ListaCRUDLibrosUsuario