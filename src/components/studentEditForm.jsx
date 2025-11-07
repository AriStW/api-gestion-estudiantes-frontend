import { useState, useEffect } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormGroup,
  Typography,
} from "@mui/material";

const materias = ["ciencia", "arte", "historia", "física"];

const StudentEditForm = ({ student, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    curso: [],
  });

  useEffect(() => {
    if (student) {
      setFormData({
        nombre: student.nombre || "",
        apellido: student.apellido || "",
        email: student.email || "",
        curso: Array.isArray(student.curso) ? [...student.curso] : [],
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      let updatedCursos;

      if (checked) {
        updatedCursos = [...prev.curso, value];
      } else {
        updatedCursos = prev.curso.filter((c) => c !== value);
        if (updatedCursos.length === 0) {
          return prev;
        }
      }

      return { ...prev, curso: updatedCursos };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.apellido || !formData.email) return;
    if (formData.curso.length === 0) return;

    const cleanData = {
      nombre: formData.nombre.trim(),
      apellido: formData.apellido.trim(),
      email: formData.email.trim(),
      curso: formData.curso,
    };

    onSubmit(cleanData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <FormGroup sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Materias:</Typography>
        {materias.map((m) => (
          <FormControlLabel
            key={m}
            control={
              <Checkbox
                checked={formData.curso.includes(m)}
                onChange={handleCheckChange}
                value={m}
              />
            }
            label={m.charAt(0).toUpperCase() + m.slice(1)}
          />
        ))}
      </FormGroup>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        fullWidth
      >
        Guardar cambios
      </Button>
    </form>
  );
};

export default StudentEditForm;
