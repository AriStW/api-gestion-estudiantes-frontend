import React, { useState, useEffect } from 'react';
import StudentForm from "../../components/StudentForm";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@mui/material';
import { getStudents } from "../../services/getStudents";
import { postStudent } from "../../services/postStudent"


const AddStudent = () => {

  const initialFormState = {
    nombre: '',
    apellido: '',
    email: '',
    curso: []
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleValidation = async () => {
    const emailExists = students.some(
      (student) => student.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (emailExists) {
      setErrors(prev => ({ ...prev, email: "Este email ya está registrado" }));
      return false;
    }

    setErrors(prev => ({ ...prev, email: undefined }));
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await handleValidation();

    if (isValid) {
      console.log("Formulario válido. Enviando datos:", formData);
      const newStudent= await postStudent(formData);
      console.log("nuevo estudiante:", newStudent);
      handleReset();
    } else {
      console.log("Validación fallida. Corrige los errores.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleCourseChange = (event) => {
    const { value, checked } = event.target;
    setFormData(prevData => {
      const newCourses = checked
        ? [...prevData.curso, value]
        : prevData.curso.filter(course => course !== value);
      return { ...prevData, curso: newCourses };
    });
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
  };

  return (
   <StudentForm
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleCourseChange={handleCourseChange}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
      title="Registro de Estudiante"
      buttonLabel="Registrar"
    />
  );
};

export default AddStudent;
