import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Drawer } from '@mui/material';


const MenuDrawer = ({isOpenDrawer, setIsOpenDrawer}) => {

  return (
    <>
      <Drawer anchor='left' open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}>
        <List>
          {['cursos', 'alumnos', 'inscribirse'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
export default MenuDrawer