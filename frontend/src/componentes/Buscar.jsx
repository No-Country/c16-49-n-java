import React, { useState, useEffect, useContext, useRef } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ClearIcon from '@mui/icons-material/Clear';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Button } from "@mui/material";
import AppContext from "../context/AppContext";

{/* SEARCH */ }
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Buscar() {
    const {dataLibros, resultadosBusqueda, setResultadosBusqueda,cantidadPaginas, setCantidadPaginas, tamañoPagina, paginaActual, setPaginaActual} = useContext(AppContext);
    const [datosInput, setDatosInput] = useState('');
    const [parametro, setParametro] = useState('');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(false);
    // const { setResultadosBusqueda, setCantidadPaginas } = useContext(AppContext);

    useEffect(() => {
        if (ejecutarConsulta && parametro !== '' && datosInput.trim() !== '') {
            handleInput();
            setEjecutarConsulta(false);
        }
    }, [ejecutarConsulta, parametro, datosInput]);

    const handleInputChange = (event) => {
        setDatosInput(event.target.value);
        setEjecutarConsulta(true);
    };

    const handleFiltro = (event) => {
        setParametro(event.target.value);
        setEjecutarConsulta(true);
    };
    const handleLimpiarBusqueda = ()  => {
        setResultadosBusqueda([]);
        setCantidadPaginas(0); // Actualiza la cantidad de páginas
        setPaginaActual(1); // Reinicia la página actual
        setDatosInput('');
        setParametro('');
    };
    
    const handleInput = () => {

        fetch(`https://paginascompartidas.fly.dev/api/v1/libros/buscar?${parametro}=${datosInput}`)

            .then(response => response.json())
            .then(data => {
                console.log(data.content);
                setResultadosBusqueda(data.content)
                setCantidadPaginas(data.totalPages)
            })
            .catch(error => {
                console.error('Error al realizar la búsqueda:', error);
            });



    };


    return (
        <>
        <Box sx={{ width: 80 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={parametro}
                        label="parametro"
                        onChange={handleFiltro}

                    >
                        <MenuItem value='titulo'>Título</MenuItem>
                        <MenuItem value='autor'>Autor</MenuItem>
                        <MenuItem value='isbn'>ISBN</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Search >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Busca por titulo, autor o ISBN"
                    inputProps={{ 'aria-label': 'search' }}
                    value={datosInput}
                    onChange={handleInputChange}

                />
<Button   variant="text" color="secondary" sx={{height:'100%'}} onClick={handleLimpiarBusqueda}
                            >
                                <ClearIcon sx={{ fontSize:'large'}}/>
                            </Button>
            </Search>
            
            
        </>

    )

}
export default Buscar;