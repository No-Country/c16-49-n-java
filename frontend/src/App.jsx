import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './componentes/themeConfig';
import NavBar from './componentes/NavBar';
import Home from './componentes/Home';
import Catalogo from './componentes/Catalogo';
import Libro from './componentes/Libro';
import Registro from './componentes/Registro';
import Sesion from './componentes/InicioSesion';
import Footer from './componentes/Footer';


import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="*" element={<Home />}></Route>
          {/* <Route path='/Inicio' element={<Home />}> </Route> */}
          <Route path='/Libros' element={<Catalogo />}></Route>
          <Route path='/Registrate' element={<Registro />}></Route>
          <Route path='/IniciaSesion' element={<Sesion />}></Route>
          <Route path='/Libro/:id' element={<Libro />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>

    </>
  )
}

export default App;
