import React from "react";
import '../estilos/footer.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from "@mui/material";
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import Boton from './Boton';
import LineaH from "./LineaH";
function Footer() {
    return (
        <>
            <ThemeProvider theme={theme.palette}>
                <footer className="footerContenedor">
                    <div className="contenedorEstatico">
                        <div className="contenedorTextoEstatico">
                            <Typography variant="h3" className="titulo">Descubre, intercambia, crece</Typography>
                        </div>
                        <div className="contenedorLlamados">
                            <div className="contenedorBotones">
                                <LinkRouter to='/Registro'><Boton className="focoA" titulo="Inicia Sesión"
                                ></Boton></LinkRouter>
                            </div>
                            <div className="contenedorBotones">
                                <LinkRouter to='/Sesion'><Boton className="focoB" titulo="Registrate"
                                ></Boton></LinkRouter>
                            </div>
                        </div>
                    </div>

                    <div className="contenedorInfoFooter">
                        <div className="contenedorLogoFooter"><img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Flogo.png?alt=media&token=b47a9708-49ef-4457-bc1a-f42b16282ef1" alt='logo de la web'></img></div>
                        <div className="contenedorInfoDerecha">
                            <div className="contenedorRedes">
                                <InstagramIcon sx={{ fontSize: '45px' }} />
                                <LinkedInIcon sx={{ fontSize: '45px' }} />
                                <MailOutlineIcon sx={{ fontSize: '45px' }} />
                            </div>
      
                            <div className="contenedorEnlacesFooter">
                                <LinkRouter to='/'>Home</LinkRouter>
                                <LinkRouter to='/Libros'>Ver Catálogo</LinkRouter>


                            </div>
                        </div>

                    </div>
                    <LineaH color={'#dda15e'} width={'100%'}/>
                    <div className="contenedorDerechos">
                        <Typography>Copyrigth © 2024 | Páginas Compartidas</Typography>
                        <Typography>Jesús Pablo Olivar | Matias Perlo | Yormaris Maita</Typography>
                    </div>
                </footer>
            </ThemeProvider>

        </>
    )
}
export default Footer;