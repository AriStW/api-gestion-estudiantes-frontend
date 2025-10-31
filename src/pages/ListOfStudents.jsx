import { useEffect, useState } from "react";
import { getStudents } from "../services/getStudent";
import CardStudents from "../components/CardStudents";
import { CircularProgress } from "@mui/material";


const ListOfStudents = () =>{

    const [isLoading, setIsLoading] = useState(false);
    const [studentList, setStudentList] = useState([]); 

    const handleStudents = async () =>{
        const response = await getStudents();
        setStudentList(response);
        setIsLoading(false);
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
                    <CardStudents key={student._id} student={student} />
                ))
            }
        </div>
    )
}
export default ListOfStudents