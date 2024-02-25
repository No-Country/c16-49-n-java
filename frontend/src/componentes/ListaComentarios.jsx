import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function ListaComentarios() {
    return (

        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: 'auto' }} >
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima reiciendis fugiat sit quis similique corporis, voluptatibus, architecto
                    iure dignissimos quisquam eos delectus ipsum doloribus.
                    Numquam officia nostrum beatae iusto. Doloribus.</Typography> </Box>
        </Container>
    );
}