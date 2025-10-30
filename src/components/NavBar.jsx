import { useState } from 'react';
import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './MenuDrawer';

const NavBar =() =>{
 const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    return(
        <>
        <AppBar position='static'>
                <Toolbar>
                  <IconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  sx={{mr:2}}
                  onClick={()=> setIsOpenDrawer(true)}>
                  <MenuIcon />
                  </IconButton>
                  <Typography variant='h6' component='div' sx={{FlexGrow: 1}}>
                    New
                  </Typography>
                  <Button color='inherit' >Loggin</Button>
                </Toolbar>
                </AppBar> 
                 <Drawer anchor='left' open={isOpenDrawer} onClose={()=> setIsOpenDrawer(false)}>
                     <MenuDrawer />
                </Drawer>  
        </>
    )
}
export default NavBar