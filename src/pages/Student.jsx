import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../services/getStudent";

const Student = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5">Detalle del estudiante</Typography>
      <Typography>ID del estudiante: {id}</Typography>
    </div>
  );
};

export default Student;