//export const STUDENTS = import.meta.env.VITE_STUDENTS
const STUDENTS = '/api/estudiantes';

export const getStudent = async (studentId) =>{
    const response = await fetch(`${STUDENTS}/${studentId}`);
 //const response = await fetch(`${STUDENTS}/${studentId}`);
    const result = await response.json();
    return result;
}