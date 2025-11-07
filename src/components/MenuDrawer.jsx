import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';

const MenuDrawer = ({ isOpenDrawer, setIsOpenDrawer }) => {
  const navBar = [
    { path: '/', name: 'Lista de estudiantes' },
    { path: '/addStudent', name: 'Ingresar nuevo alumno' },
    { path: '/searchCourse', name: 'Filtrar lista alumno por curso' }
  ];

  return (
    <Drawer anchor="left" open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
      <List>
        {navBar.map(({ path, name }, index) => (
          <ListItem key={path} disablePadding>
            <ListItemButton component={NavLink} to={path}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;