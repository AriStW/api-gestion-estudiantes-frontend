export const STUDENTS = import.meta.env.VITE_STUDENTS

export const getStudents = async () =>{
// const response = await fetch('/api/estudiantes');
 const response = await fetch(STUDENTS);
    const result = await response.json();
    return result;
}