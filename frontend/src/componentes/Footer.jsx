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
function Footer() {
    return (
        <>
            <ThemeProvider theme={theme.palette}>
                <footer className="footerContenedor">
                    <div className="contenedorRedes">
                        <InstagramIcon />
                        <LinkedInIcon />
                        <MailOutlineIcon />
                    </div>
                    <div className="contenedorInfoFooter">
                        <div className="contenedorLogoFooter"><img src="https://firebasestorage.googleapis.com/v0/b/mi-proyecto-de-recetas.appspot.com/o/PAGINAS%20COMPARTIDAS%2Flogo.png?alt=media&token=b47a9708-49ef-4457-bc1a-f42b16282ef1" alt='logo de la web'></img></div>
                        <div className="contenedorEnlacesFooter">
                            <LinkRouter to='/'>Home</LinkRouter>
                            <LinkRouter to='/Libros'>Ver Catálogo</LinkRouter>
                            <LinkRouter to='/Registro'>Registrate</LinkRouter>
                            <LinkRouter to='/Sesion'>Inicia Sesión</LinkRouter>
                            
                            {/* sacar este link cuando esten los endpoint */}
                            <LinkRouter to='/Libro/{1}'>Detalle</LinkRouter>
                        </div>
                    </div>
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