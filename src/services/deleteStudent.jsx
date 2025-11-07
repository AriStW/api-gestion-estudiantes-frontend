export const STUDENTS = import.meta.env.VITE_STUDENTS
const TOKEN = import.meta.env.VITE_TOKEN_STUDENTS

export const deleteStudent = async (id) => {
  try {
    const res = await fetch(`${STUDENTS}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `${TOKEN}`,
      },
    });
    const response = await res.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};