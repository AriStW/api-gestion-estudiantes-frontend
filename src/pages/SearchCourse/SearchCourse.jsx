import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography, List, ListItem, ListItemText, CircularProgress } from "@mui/material";
import { filterListStudentByCourse } from "../../services/filterListStudentByCourse";

const SearchCourse = () => {
  const courses = [
    { label: "matemática" },
    { label: "historia" },
    { label: "ciencia" },
    { label: "arte" },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCourseChange = async (event, value) => {
    setSelectedCourse(value);
    if (value) {
      setLoading(true);
      try {
        const result = await filterListStudentByCourse(value.label);
        setStudents(result);
      } catch (error) {
        setStudents([]);
      } finally {
        setLoading(false);
      }
    } else {
      setStudents([]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Inscripción
      </Typography>

      <Autocomplete
        disablePortal
        options={courses}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        value={selectedCourse}
        onChange={handleCourseChange}
        renderInput={(params) => <TextField {...params} label="Cursos" />}
      />

      {loading && <CircularProgress sx={{ mt: 2 }} />}

      {students.length > 0 && (
        <List sx={{ mt: 2, width: 400 }}>
          {students.map((s) => (
            <ListItem key={s.id} divider>
              <ListItemText
                primary={`${s.nombre} ${s.apellido}`}
                secondary={`Correo: ${s.email}`}
              />
            </ListItem>
          ))}
        </List>
      )}

      {!loading && selectedCourse && students.length === 0 && (
        <Typography sx={{ mt: 2 }}>No se encontraron estudiantes para este curso.</Typography>
      )}
    </div>
  );
};

export default SearchCourse;
