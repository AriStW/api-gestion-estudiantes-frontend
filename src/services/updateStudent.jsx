export const STUDENTS = import.meta.env.VITE_STUDENTS
const TOKEN = import.meta.env.VITE_TOKEN_STUDENTS

//const STUDENTS = '/api/estudiantes';

export const updateStudent = async (id,body) =>{
    const response = await fetch(`${STUDENTS}/${id}`,{
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify(body),
 
    });
 //const response = await fetch(STUDENTS);
    const result = await response.json();
    console.log("resultado de put: ",result)
    return result;
}