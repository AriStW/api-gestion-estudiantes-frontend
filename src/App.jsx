import { useState } from 'react';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import MenuDrawer from './components/MenuDrawer';
import ListOfStudents from './pages/ListOfStudents';
import { Route, Routes } from 'react-router';
import OneStudent from './pages/Student';
import AddStudent from './pages/AddStudent/AddStudent.jsx';
import SearchCouse from './pages/SearchCourse/SearchCourse'
function App() {
 const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
     <>
     <Box component="section" sx={{FlexGrow: 1}}>
      <NavBar setIsOpenDrawer={setIsOpenDrawer}/> 
      <MenuDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer}/>       
    
      <Routes>
       <Route index path="/" element={<ListOfStudents />} />
       <Route path="/student/:id" element={<OneStudent />} />
       <Route path="/searchCourse" element={<SearchCouse />} />
       <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
      </Box>
   </>
  )
}

export default App
/*
<Box component="section" sx={{FlexGrow: 1}}>
      <NavBar setIsOpenDrawer={setIsOpenDrawer}/> 
      <MenuDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer}/>       
    </Box>
    <ListOfStudents/>
*/