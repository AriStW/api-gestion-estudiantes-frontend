import Box from '@mui/material/Box';
import NavBar from './components/NavBar';

function App() {


  return (
    <>
    <Box component="section" sx={{ 
      p: 2, border: '1px dashed grey' }}>
      <NavBar/>         
    </Box>
    </>
  )
}

export default App
