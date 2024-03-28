import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { RippleBadge } from './MaterialTheme/styled';

function App() {
  return <Container sx={{background:"orange"}}>
    <Stack flexDirection={"column"}>
      <Box sx={{my: 4}}>
        <Typography variant='h4' component={"h4"}>
          Create React App on Typerscript with Redux
        </Typography>
      </Box>
      <Box>
        <RippleBadge badgeContent={4}>
        <Button variant='contained'>Contained</Button>
        </RippleBadge>
      </Box>
   
    </Stack>
  </Container>
}
export default App;
