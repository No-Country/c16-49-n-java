import React, { useState, useEffect } from 'react'
import AppContext from './context/AppContext'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
import DetalleLibro from './componentes/DetalleLibro'
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [dataLibros, setDataLibros] = useState([])
  const [loading, setLoading] = useState(true);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/libros')
      .then((response) => {
       console.log(response)
        setDataLibros(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

  }, []);
  console.log(dataLibros)
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ dataLibros, setResultadosBusqueda, resultadosBusqueda }}>
          <NavBar />
          <Routes>
            <Route path="*" element={<Home />}></Route>
            {/* <Route path='/Inicio' element={<Home />}> </Route> */}
            <Route path='/Libros' element={<Catalogo />} ></Route>
            <Route path='/Registro' element={<Registro />}></Route>
            <Route path='/Sesion' element={<Sesion />}></Route>
            <Route path='/Libro/:id' element={<DetalleLibro />}></Route>
          </Routes>
          <Footer />

        </AppContext.Provider>



      </ThemeProvider>

    </>
  )
}

export default App;
