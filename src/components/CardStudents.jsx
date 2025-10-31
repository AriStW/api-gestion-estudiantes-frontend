import { Card, CardContent, Typography,Chip, CardActionArea } from "@mui/material";

const CardStudents = ({ student,onClick }) => {
    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardActionArea onClick={() => onClick(student)}>
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: "10%" }}>
                    <Typography>Nombre: {student.nombre}</Typography>
                    <Typography>Apellido: {student.apellido}</Typography>
                    <Typography>Correo: {student.email}</Typography>
                    <Typography>
                        Curso: {student.curso.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
                    </Typography>
                    <Typography>
                        <Chip
                            label={`Cantidad cursos: ${student.curso.length}`}
                            color="success"
                        />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default CardStudents