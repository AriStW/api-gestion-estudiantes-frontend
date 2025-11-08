import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  Button,
  CircularProgress,
  Drawer,
} from "@mui/material";
import useStudentsSelected from "../../hooks/useStudentsSelected";
import useDeleteStudent from "../../hooks/useDeleteStudent";
import useUpdateStudent from "../../hooks/useUpdateStudent";
import "./Student.css";

const OneStudent = () => {
  const { studentSelected, id, loading } = useStudentsSelected();
  const { handleDelete } = useDeleteStudent();
  const { handleUpdate } = useUpdateStudent();
  const [open, setOpen] = useState(false);

  if (loading)
    return <CircularProgress sx={{ display: "block", margin: "2rem auto" }} />;

  if (!studentSelected)
    return <Typography align="center">No se encontró el estudiante</Typography>;

  return (
    <>
      <Typography variant="h5" textAlign="center" color="primary">
        <br />Detalle alumno:
      </Typography>

      <Card className="studentCard" sx={{ display: "flex", flexDirection: "row" }}>
        <CardContent className="studentPhoto" sx={{ flexShrink: 0 }}></CardContent>

        <CardContent
          className="studentDetail"
          sx={{
            flexShrink: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            {studentSelected.nombre} {studentSelected.apellido}
          </Typography>
          <Typography variant="h5">ID del estudiante: {id}</Typography>
          <Typography>Correo: {studentSelected.email}</Typography>
          <Typography>
            Curso:{" "}
            {studentSelected.curso
              .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
              .join(", ")}
          </Typography>
          <Chip
            label={`Cursa: ${studentSelected.curso.length} materias`}
            color="success"
          />
        </CardContent>
      </Card>

      <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
        <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
          Editar
        </Button>
        <Button color="primary" variant="contained" onClick={() => handleDelete(id)}>
          Eliminar
        </Button>
      </Box>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" mb={2}>
            Editar estudiante
          </Typography>
          <StudentEditForm
            student={studentSelected}
            onSubmit={(data) => {
              handleUpdate(id, data);
              setOpen(false);
            }}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default OneStudent;
