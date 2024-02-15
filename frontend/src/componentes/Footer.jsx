import React from "react";
import '../estilos/footer.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themeConfig";


function Footer() {
    return (
        <>
            <ThemeProvider theme={theme.palette}>
                <footer className="footerContenedor">
                    <div><h1>Footer</h1></div>
                </footer>
            </ThemeProvider>

        </>
    )
}
export default Footer;