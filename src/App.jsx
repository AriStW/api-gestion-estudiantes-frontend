import { useState } from 'react';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import MenuDrawer from './components/MenuDrawer';
import ListOfStudents from './pages/ListOfStudents/ListOfStudents.jsx';
import { Route, Routes } from 'react-router';
import OneStudent from './pages/Student/Student.jsx';
import AddStudent from './pages/AddStudent/AddStudent.jsx';
import SearchCourse from './pages/SearchCourse/SearchCourse';
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
       <Route path="/searchCourse" element={<SearchCourse />} />
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