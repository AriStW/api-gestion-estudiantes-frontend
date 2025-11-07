import { Card, CardContent, Typography,Chip, CardActionArea } from "@mui/material";

const CardStudents = ({ student,onClick }) => {
    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardActionArea onClick={() => onClick(student)}>
                <CardContent sx={{ display: "flex", flexDirection: "row", gap: "10%" }}>
                    <Typography>Nombre: {student.nombre}</Typography>
                    <Typography>Apellido: {student.apellido}</Typography>
                     
                    <Typography>
                    {student.curso.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
                    </Typography>
                    <Chip
                            label={`Cantidad cursos: ${student.curso.length}`}
                            color="success"
                        />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default CardStudents