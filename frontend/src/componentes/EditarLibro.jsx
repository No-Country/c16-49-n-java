import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Boton from "./Boton";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import CargarArchivo from "./CargarArchivo";
import '../estilos/botones.css'

// function EditarLibro({libro}) {
function EditarLibro() {
    // codigo del popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mensaje, setMensaje] = useState(null);



    const handleEditar = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMensaje(''); // Limpiar el mensaje al cerrar
        setError('');
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // constantes del formulario
    const [isbn, setIsbn] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [fechaDePublicacion, setFechaDePublicacion] = useState('');
    const [resumen, setResumen] = useState('');
    const [editorial, setEditorial] = useState('');
    const [paginas, setPaginas] = useState('');
    const [genero, setGenero] = useState('');
    const [nombreImagen, setNombreImagen] = useState('');
    const [estado, setEstado] = useState("");
    const [error, setError] = useState('');

    const [libro, setLibro] = useState('');
    const handleChange = (event) => {
        setEstado(event.target.value);

    };




    const handleClickForm = (event) => {
        event.preventDefault();
        console.log('verificar campos antes de enviar')
        // Verificar si los campos están llenos
        if (titulo.trim() === '' || autor.trim() === '' || isbn.trim() === '' || fechaDePublicacion.trim() === '' ||
            resumen.trim() === '' || editorial.trim() === '' || paginas.trim() === '' || genero.trim() === '' ||
            nombreImagen.trim() === '' || estado.trim() === '') {
            setError('Todos los campos son requeridos');
            return;
        }

        //     // Verificar si el formato del Titulo es válido
        //     const TituloRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     if (!TituloRegex.test(Titulo)) {
        //         setError('Ingrese un Titulo válido');
        //         return;
        //     }
        setError('');
        //     // Si pasa las validaciones, enviar la solicitud
        //     setMensaje('Solicitud enviada con éxito. Serás contactado al mail registrado.');
        //     setNombre('');
        //     setTitulo('');
        //     handleClose()
    }

    return (
        <>

            <div>
                
                <Button aria-describedby={id} onClick={handleEditar} 
                sx={{backgroundColor:'#dda15e'
                
                }}
                >
                    Editar Libro
                </Button>
                <Popover
                    id={id}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    // onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >





                    <div className="contenedorGeneralPopover">

                        <div className="contenedorGraficoFormIntercambio" >
                            <div className="contenedorImagenFormInytercambio">
                                <img src='https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2FLogo%20sobre%20moda%20femenina%20minimalista%20neutral%20(2).png?alt=media&token=52394f2f-db85-41aa-8265-80935ea55ba6' alt='logo'></img>
                            </div>
                            <div className="contenedorTextoGraficoFormIntercambio">
                                <Typography variant="h4" sx={{ color: 'white', fontWeight: 'semiBold' }}>
                                    Verifica la información del Libro y actualiza los campos necesarios</Typography>
                            </div>
                        </div>

                        <Box
                            component="form"
                            autoComplete="on"
                            onSubmit={handleClickForm}
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: '100%' },
                                width: '90%'
                                // display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                                // columnGap: '2%'
                            }}
                            backgroundColor='white'
                        >
                            <div style={{ width: '100%', marginLeft: '2%', marginRight: '2%' }}>
                                <Typography variant="h3" color='secondary'>Editar: {libro.titulo}</Typography>
                                <Box
                                    sx={
                                        {
                                            width: '(calc(100%/3))',
                                            display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                            alignItems: 'center', justifyContent: 'center'
                                        }
                                    }

                                > <TextField
                                        required
                                        id="id"
                                        label="id"
                                        // defaultValue={'libro.id'}
                                        defaultValue={''}
                                        disabled
                                        variant="standard"
                                    />

                                    <TextField
                                        required
                                        id="autor"
                                        label="Autor del Libro"
                                        // defaultValue={'libro.autor'}
                                        defaultValue={''}
                                        onChange={(e) => setAutor(e.target.value)}
                                        helperText="Actualiza el Nombre del Autor"
                                        variant="standard"
                                    />
                                    <TextField
                                        required
                                        id="titulo"
                                        label="Título del Libro"
                                        // defaultValue={'libro.titulo'}
                                        defaultValue={''}
                                        onChange={(e) => setTitulo(e.target.value)}
                                        helperText="Actualiza el título del Libro"
                                        variant="standard"
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        width: '(calc(100%/2))',
                                        display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                        alignItems: 'center', justifyContent: 'center'
                                    }} >

                                    <TextField
                                        required
                                        id="fechaDePublicacion"
                                        label="Fecha de Publicación"
                                        // defaultValue={libro.fechaDePublicacion}
                                        defaultValue={''}
                                        helperText="Actualiza la fecha en que se publicó"
                                        onChange={(e) => setFechaDePublicacion(e.target.value)}
                                        variant="standard"
                                    />

                                    <TextField
                                        required
                                        id="editorial"
                                        label="Editorial"
                                        // defaultValue={libro.editorial}
                                        defaultValue={''}
                                        helperText="Actualiza la editorial del Libro"
                                        onChange={(e) => setEditorial(e.target.value)}
                                        variant="standard"
                                    />
                                </Box>

                                <TextField
                                    required
                                    id="resumen"
                                    label="Sintaxis"
                                    defaultValue={''}
                                    // defaultValue={libro.resumen}
                                    helperText="Actualiza un resumen del Libro"
                                    onChange={(e) => setResumen(e.target.value)}
                                    variant="standard"
                                />
                                <Box sx={{
                                    width: '(calc(100%/3))',
                                    display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                    columnGap: '1%'
                                }}>
                                    <TextField
                                        required
                                        id="isbn"
                                        label="Isbn"
                                        // defaultValue={libro.isbn}
                                        defaultValue={''}
                                        onChange={(e) => setIsbn(e.target.value)}
                                        helperText="Actualiza el código del libro"
                                        variant="standard"
                                    />
                                    <TextField
                                        required
                                        id="paginas"
                                        label="Páginas"
                                        // defaultValue={libro.paginas}
                                        defaultValue={''}
                                        helperText="Actualiza la cantidad de páginas"
                                        onChange={(e) => setPaginas(e.target.value)}
                                        variant="standard"
                                    />
                                    <TextField
                                        required
                                        id="genero"
                                        label="Género"
                                        // defaultValue={libro.genero}
                                        defaultValue={''}
                                        helperText="Actualiza el género del Libro"
                                        onChange={(e) => setGenero(e.target.value)}
                                        variant="standard"
                                    />

                                </Box>
                                <Box
                                    sx={{
                                        width: '(calc(90%/3))', marginLeft: '3%', marginRight: '3%',
                                        display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                        columnGap: '1%', alignItems: 'center', justifyContent: 'center', marginBottom: '30'
                                    }}
                                >

                                    <CargarArchivo />
                                    <TextField
                                        required
                                        id="nombreImagen"
                                        label="Nombre de la Imagen"
                                        // defaultValue={libro.nombreImagen}
                                        defaultValue={''}
                                        helperText="Actualiza el nombre de tu archivo jpg"
                                        onChange={(e) => setNombreImagen(e.target.value)}
                                        variant="standard"
                                    />
                                    <Box sx={{

                                        display: 'flex', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <InputLabel
                                            id="estado"
                                            label="Estado"
                                            // defaultValue={libro.estado}
                                            defaultValue={""}
                                            onChange={handleChange}
                                            variant="standard"
                                        >
                                            Estado
                                        </InputLabel>
                                        <Select
                                            labelId="estado"
                                            id="estado"
                                            // value={libro.estado}
                                            value={estado}
                                            label="estado"
                                            onChange={handleChange}
                                        >
                                            <option value="usado">usado</option>
                                            <option value="nuevo">nuevo</option>
                                            <option value="roto">roto</option>
                                        </Select>
                                    </Box>


                                </Box>

                                {error && <Typography color="error">{error}</Typography>}
                            </div>
                            <div className="accionesAgregarLibro">
                                <Boton className={'info'} titulo={'Cancelar'} mensaje={'Accion Cancelada'} icon={'info'} onClick={handleClose}></Boton>
                                <Boton className={'accion'} type="submit"
                                    titulo={'Enviar Solicitud'} mensaje={mensaje} icon={'success'}></Boton>
                            </div>


                        </Box>

                    </div>





                </Popover>
            </div>
        </>
    )

}
export default EditarLibro