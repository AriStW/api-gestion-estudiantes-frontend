import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../services/getStudent";

const setStudentsSelected =()=>{

     const { id } = useParams();
  const [studentSelected, setstudentSelected] = useState();

  const handleStudent = async () => {
    const result = await getStudent(id);
    setstudentSelected(result);
  }
  useEffect(()=>{
    handleStudent();
  },[id]);
    return(
        {studentSelected,id})
}

export default setStudentsSelected