import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
import { NavLink } from 'react-router-dom';

const MenuDrawer = ({ isOpenDrawer, setIsOpenDrawer }) => {
  const navBar = [
    { path: '/', name: 'Lista de estudiantes', icon:  <ListAltRoundedIcon/>},
    { path: '/addStudent', name: 'Ingresar nuevo alumno', icon: <PlaylistAddRoundedIcon />},
    { path: '/searchCourse', name: 'Filtrar lista alumno por curso', icon: <FilterListAltIcon/> }
  ];

  return (
    <Drawer anchor="left" open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} >
      <List sx={{margin:"10%"}}>
        {navBar.map(({ path, name, icon }, index) => (
          <ListItem key={path} disablePadding>
            <ListItemButton component={NavLink} to={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;