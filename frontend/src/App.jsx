import React, { useState, useEffect } from 'react'
import AppContext from './context/AppContext'
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
import PerfilUsuario from './componentes/PerfilUsuario'
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import { API_BASE_URL } from './config';

function App() {
  const [dataLibros, setDataLibros] = useState([])
  const [loading, setLoading] = useState(true);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [cantidadPaginas, setCantidadPaginas] = useState(0)
  const [tamañoPagina, setTamañoPagina] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [token, setToken] = useState(null); 
  const [usuario, setUsuario]=useState({})
  const { libroSeleccionado, setLibroSeleccionado } = useState(null);

  useEffect(() => {
    axios
      // .get('https://paginascompartidas.fly.dev/api/v1/libros?p=' + paginaActual)
      .get(`${API_BASE_URL}/libros?p=`+paginaActual)
      .then((response) => {
        console.log('respuesta de la api:response.data')
        console.log(response.data)
        setDataLibros(response.data.content);
        setCantidadPaginas(Math.ceil(response.data.totalPages))
        setTamañoPagina(response.data.size)
        setPaginaActual(Math.ceil(response.data.pageable.pageNumber))
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

  }, [paginaActual]);
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ dataLibros, setResultadosBusqueda, resultadosBusqueda, setCantidadPaginas, cantidadPaginas, tamañoPagina, paginaActual, setPaginaActual, token, setToken, usuario, setUsuario, libroSeleccionado, setLibroSeleccionado}}>
          <NavBar />
          <Routes>
            <Route path="*" element={<Home />}></Route>
            {/* <Route path='/Inicio' element={<Home />}> </Route> */}
            <Route path='/libros' element={<Catalogo />} ></Route>
            <Route path='/Registro' element={<Registro />}></Route>
            <Route path='/Sesion' element={<Sesion />}></Route>
            <Route path='/libros/:id' element={<DetalleLibro />}></Route>
            <Route path='/perfil' element={<PerfilUsuario />}></Route>
          </Routes>
          <Footer />

        </AppContext.Provider>



      </ThemeProvider>

    </>
  )
}

export default App;
