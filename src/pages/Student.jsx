import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import setStudentsSelected from "../hooks/setStudentsSelected";
import "./Student.css";

const OneStudent = () => {
  const { studentSelected, id } = setStudentsSelected();
  console.log(studentSelected);
  return (
    <>
      <Typography variant="h5"
      textAlign="center"
      color="primary">
        <br />Detalle alumno:</Typography>
      <Card className="studentCard" sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <CardContent  className="studentPhoto" sx={{
          flexShrink: 0
        }}>
        </CardContent>
        <CardContent className="studentDetail" sx={{
          flexShrink: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems:"center"
        }}>
          <Typography variant="h4">{studentSelected?.nombre} {studentSelected?.apellido}</Typography>
          {!studentSelected && (
            <Typography variant="h5">Cargando datos del estudiante...</Typography>
          )}
          <Typography variant="h5">ID del estudiante: {id}</Typography>
          <Typography>Correo: {studentSelected?.email}</Typography>
          <Typography>
            Curso: {studentSelected?.curso.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
          </Typography>
          <Chip label={`cursa: ${studentSelected?.curso.length} materias`} color="success" />
        </CardContent></Card>
    </>
  );
};

export default OneStudent