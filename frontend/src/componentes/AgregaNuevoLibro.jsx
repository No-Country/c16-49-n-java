import React, { useEffect, useState, useContext } from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Boton from "./Boton";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Select from "@mui/material/Select";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { InputLabel } from "@mui/material";
import Swal from "sweetalert2";
import CargarArchivo from "./CargarArchivo";
import MenuItem from "@mui/material/MenuItem";
import { API_BASE_URL } from "../config";
import AppContext from "../context/AppContext";

const estados = [
    {
        value: "usado",
        label: "usado",
    },
    {
        value: "nuevo",
        label: "nuevo",
    },
    {
        value: "desgastado",
        label: "desgastado",
    },
];


function AgregaNuevoLibro() {
    const { token } = useContext(AppContext);
    // codigo del popover
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mensaje, setMensaje] = useState(null);



    const handleAgregarNuevo = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log('llame a cancelar')
        Swal.fire({
            title: "",
            text: 'Registro de Libro Cancelado',
            icon: "info",
        }).then(() => {
            limpiarCampos()
            setAnchorEl(null)
        });
    };
    const limpiarCampos = () => {
        setAutor(''), setEditorial(''), setEstado(''), setIsbn(''), setTitulo(''), setFechaDePublicacion(''), setResumen(''),
            setGenero(''), setPaginas(''), setSelectedFile(null), setError('')
    }
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
    const [estado, setEstado] = useState(``);
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);


    const [libro, setLibro] = useState('');
    const handleChange = (event) => {
       console.log(event.target.value)
        setEstado(event.target.value);

    };


    const handleCargarImagen = (event) => {
        // console.log(event.target.files[0])
        setSelectedFile(event.target.files[0]);
    };

    const handleClickForm = async (event) => {
        event.preventDefault();
        if (titulo.trim() === '' || autor.trim() === '' || isbn.trim() === '' || fechaDePublicacion.trim() === '' ||
            resumen.trim() === '' || editorial.trim() === '' || paginas.trim() === '' || genero.trim() === '' ||
            estado.trim() === '' || selectedFile === null) {
            setError('Todos los campos son requeridos');
            return;
        }


        setError('');
        //     // Si pasa las validaciones, enviar la solicitud
        const formData = new FormData();
        const libro = {
            isbn, titulo, autor, fechaDePublicacion, resumen, editorial, paginas, genero, estado
        }

        formData.append('json', JSON.stringify(libro));
        formData.append('imagen', selectedFile);

        formData.forEach((value, key) => {
            console.log(key, value);
        });

        try {
            const response = await fetch(`${API_BASE_URL}/libros`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            if (response.ok) {
                console.log(response)
                Swal.fire({
                    title: "Felicidades!",
                    text: 'Libro Registrado con éxito',
                    icon: "success",
                }).then(() => {
                    limpiarCampos()
                    setAnchorEl(null)
                });
            }
            else {
                setError('Error al enviar datos a la API');
            }
        }
        catch (error) {
            setError('Error al agregar libro')
            console.log(error)
        }

    }

    return (
        <>

            <div>
                <Button aria-describedby={id} variant="contained" onClick={handleAgregarNuevo}>
                    Agregar Libro
                </Button>
                <Popover
                    id={id}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
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
                                    Gracias por darle Valor a nuestra comunidad y compartir
                                    tu librería con Nosotros</Typography>
                            </div>
                        </div>

                        <Box
                            component="form"
                            onSubmit={handleClickForm}
                            sx={{
                                '& .MuiTextField-root': { m: 2, width: '100%' },
                                width: '90%'
                            }}
                            noValidate
                            autoComplete="off"
                            backgroundColor='white'
                        >
                            <div style={{ width: '100%', marginLeft: '2%', marginRight: '2%' }}>
                                <Typography variant="h3" color='secondary'>Agregar Libro a mi Librería</Typography>
                                <Box
                                    sx={
                                        {
                                            width: '(calc(100%/2))',
                                            display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                            alignItems: 'center', justifyContent: 'center'
                                        }
                                    }

                                >

                                    <TextField
                                        required
                                        id="autor"
                                        label="Autor del Libro"
                                        defaultValue={''}
                                        onChange={(e) => setAutor(e.target.value)}
                                        helperText="Escribe el Nombre del Autor"
                                        variant="standard"
                                    />
                                    <TextField
                                        required
                                        id="titulo"
                                        label="Título del Libro"
                                        defaultValue={''}
                                        onChange={(e) => setTitulo(e.target.value)}
                                        helperText="Escribe el título del Libro"
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
                                        type="date"
                                        defaultValue={''}
                                        helperText="Escribe la fecha en que se publicó"
                                        onChange={(e) => setFechaDePublicacion(e.target.value)}
                                        variant="standard"
                                    />

                                    <TextField
                                        required
                                        id="editorial"
                                        label="Editorial"
                                        defaultValue={''}
                                        helperText="Escribe la editorial del Libro"
                                        onChange={(e) => setEditorial(e.target.value)}
                                        variant="standard"
                                    />
                                </Box>

                                <TextField
                                    required
                                    id="resumen"
                                    label="Sintaxis"
                                    defaultValue={''}
                                    helperText="Escribe un resumen del Libro"
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
                                        defaultValue={''}
                                        onChange={(e) => setIsbn(e.target.value)}
                                        helperText="Escribe el código del libro"
                                        variant="standard"
                                    />
                                    <TextField
                                        required
                                        id="paginas"
                                        label="Páginas"
                                        defaultValue={''}
                                        helperText="Escribe la cantidad de páginas"
                                        onChange={(e) => setPaginas(e.target.value)}
                                        variant="standard"
                                    />
                                    <TextField
                                        required
                                        id="genero"
                                        label="Género"
                                        defaultValue={''}
                                        helperText="Escribe el género del Libro"
                                        onChange={(e) => setGenero(e.target.value)}
                                        variant="standard"
                                    />

                                </Box>
                                <Box
                                    sx={{
                                        width: '(calc(90%/2))', marginLeft: '3%', marginRight: '3%',
                                        display: 'flex', flexDirection: 'row', flexWrap: 'noWrap',
                                        columnGap: '1%', alignItems: 'center', justifyContent: 'center', marginBottom: '30'
                                    }}
                                >
                                    <>
                                        <CloudUploadIcon /><input type="file" onChange={handleCargarImagen}></input>
                                    </>

                                    <Box sx={{

                                        display: 'flex', flexDirection: 'column',
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <TextField
                                            id="estado"
                                            select
                                            label="Estado"
                                            value={estado}  
                                            helperText="En que estado se encuentra"
                                            onChange={handleChange}
                                        >
                                            {estados.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                      
                                    </Box>


                                </Box>

                                {error && <Typography color="error">{error}</Typography>}
                            </div>
                            <div className="accionesAgregarLibro">
                                <Button variant="contained" onClick={handleClose} sx={{
                                    backgroundColor: 'rgba(240, 52, 6, 0.945)',
                                }}>Cancelar</Button>
                                <Button type="submit" variant="contained" sx={{ backgroundColor: '#79a843' }}>Agregar</Button>
                            </div>


                        </Box>

                    </div>
                </Popover>
            </div>
        </>
    )

}
export default AgregaNuevoLibro