import React, { useState, useEffect } from 'react';
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
const nameCourse = ["matematica", "historia", "ciencia", "arte"];

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
    <Box
      component="form"
      sx={{
        maxWidth: 500,
        margin: 'auto',
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        mt: 5
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Registro de Estudiante
      </Typography>

      <TextField
        fullWidth
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        error={!!errors.email}
        helperText={errors.email}
      />

      <FormControl component="fieldset" margin="normal" fullWidth required>
        <Typography variant="subtitle1" gutterBottom>
          Selecciona los cursos:
        </Typography>
        <FormGroup row>
          {nameCourse.map((courseName) => (
            <FormControlLabel
              key={courseName}
              control={
                <Checkbox
                  checked={formData.curso.includes(courseName)}
                  onChange={handleCourseChange}
                  value={courseName}
                  name="curso"
                />
              }
              label={courseName.charAt(0).toUpperCase() + courseName.slice(1)}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Registrar Estudiante
        </Button>

        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleReset}
        >
          Limpiar
        </Button>
      </Box>
    </Box>
  );
};

export default AddStudent;
