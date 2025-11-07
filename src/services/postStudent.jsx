export const STUDENTS = import.meta.env.VITE_STUDENTS
const TOKEN = import.meta.env.VITE_TOKEN_STUDENTS

//const STUDENTS = '/api/estudiantes';

export const postStudent = async (body) =>{
    const response = await fetch(`${STUDENTS}`,{
    method: "POST",
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