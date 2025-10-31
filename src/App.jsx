import { useState } from 'react';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import MenuDrawer from './components/MenuDrawer';

function App() {
 const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
    <Box component="section" sx={{FlexGrow: 1}}>
      <NavBar setIsOpenDrawer={setIsOpenDrawer}/> 
      <MenuDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer}/>       
    </Box>
    </>
  )
}

export default App
