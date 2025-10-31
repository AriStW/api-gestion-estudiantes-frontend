import { useEffect, useState } from "react";
import { getStudents } from "../services/getStudents";
import CardStudents from "../components/CardStudents";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";

const ListOfStudents = () =>{
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [studentList, setStudentList] = useState([]); 

    const handleStudents = async () =>{
        const response = await getStudents();
        setStudentList(response);
        setIsLoading(false);
    }
    
    const handleDetailStudent = (cardStudent) =>{
       navigate(`/student/${cardStudent._id}`);

    }

    useEffect(()=>{
        setIsLoading(true);
        handleStudents();
    },[])
    
    if (isLoading){
        return (
            <CircularProgress color="success" />
        )
    }
    else return (
        <div>
            {!isLoading &&
                studentList.length > 0 &&
                studentList.map((student) => (
                    <CardStudents key={student._id} student={student} onClick={() => handleDetailStudent(student)} />
                ))
            }
        </div>
    )
}
export default ListOfStudents