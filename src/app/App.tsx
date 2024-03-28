import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';

function App() {
  return <Container maxWidth="sm">
    <Stack flexDirection={"column"}>
      <Box sx={{my: 4}}>
        <Typography variant='h4' component={"h4"}>
          Create React App on Typerscript with Redux
        </Typography>
      </Box>
      <Button variant='contained'>Contained</Button>
    </Stack>
  </Container>
}
export default App; 
