import * as React from 'react';
import { useContext, useState, useEffect} from "react";
import AppContext from "../context/AppContext";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginacion() {
    const { cantidadPaginas, tamañoPagina, paginaActual, setPaginaActual} = useContext(AppContext);
      console.log(paginaActual)
    
    const handleChange = (event, value) => {
    setPaginaActual(value - 1);
    console.log(paginaActual)
}


  return (
    <Stack spacing={2} sx={{marginTop:'40px'}}>
      <Pagination count={cantidadPaginas} onChange={handleChange} />
    </Stack>
  );
}
