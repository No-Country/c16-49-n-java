import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as LinkRouter } from 'react-router-dom';
import Buscar from './Buscar';
import { useLocation } from 'react-router-dom';
import '../estilos/navbar.css';


const pages = [

    {
        name: 'Libros',
        path: '/libros'
    },
    {
        name: 'Registrate',
        path: '/Registro'
    },
    {
        name: 'Inicia Sesión',
        path: '/Sesion'
    }

];

// const settings = ['Inicia Sesión', 'Registrate'];


function NavBar() {
    const ubicacion = useLocation();
    const mostrarBuscador = ubicacion.pathname === '/libros';

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    // manejo de los estados para mostrar inicio de sesion
    // const [showSesion, setShowSesion] = React.useState(false);
    // const [showRegistro, setShowRegistro] = React.useState(false);
    // const handleOpenSesion = () => {
    //     setShowSesion(true);
    //     console.log("Se abrió el formulario de inicio de sesión");
    //     handleCloseUserMenu(); // Cierra el menú después de hacer clic en "Iniciar Sesión"
    // };

    // const handleOpenRegistro = () => {
    //     setShowRegistro(true);
    //     console.log("Se abrió el formulario de registro");
    //     handleCloseUserMenu(); // Cierra el menú después de hacer clic en "Registrarse"
    // };

    // const handleCloseForms = () => {
    //     setShowSesion(false);
    //     setShowRegistro(false);
    // };
    // const handleMenuItemClick = (setting) => {
    //     switch (setting) {
    //         case 'Inicia Sesion':
    //             return handleOpenSesion;
    //         case 'Registrate':
    //             return handleOpenRegistro;
    //         default:
    //             return handleCloseUserMenu;
    //     }
    // };
    
    return (
        <AppBar position='fixed' sx={{ left: '0', right: 'auto' }}>
            <Toolbar disableGutters>
                <LinkRouter to='/'>
                    <div className='logo'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Flogo.png?alt=media&token=b47a9708-49ef-4457-bc1a-f42b16282ef1' alt='logo' />
                    </div>
                </LinkRouter>
                {/* BUSQUEDA */}
                {mostrarBuscador && <Buscar/>}
                <Box sx={{ flexGrow: 1 }} />
                {/* contenedor de enlaces */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.path}
                            component={LinkRouter}
                            to={page.path}
                            sx={{ mx: 2, color: 'white' }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    component={LinkRouter}
                                    to={page.path}>{page.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box >


            </Toolbar>
        </AppBar>
    );
}
export default NavBar;
