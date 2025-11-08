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

const nameCourse = ["matematica", "historia", "ciencia", "arte"];

const StudentForm =({
    formData,
    errors,
    handleChange,
    handleCourseChange,
    handleSubmit,
    handleReset,
    title = "Formulario de Estudiante",
    buttonLabel = "Guardar",
}
) => {
return(
    <>
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
        {title}
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
          {buttonLabel}
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
    </>
)
}
export default StudentForm;