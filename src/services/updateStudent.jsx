export const STUDENTS = import.meta.env.VITE_STUDENTS
const TOKEN = import.meta.env.VITE_TOKEN_STUDENTS

//const STUDENTS = '/api/estudiantes';

export const updateStudent = async (body,studentId) =>{
    const response = await fetch(`${STUDENTS}/${studentId}`,{
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify(body),
 
    });
 //const response = await fetch(STUDENTS);
    const result = await response.json();
    return result;
}