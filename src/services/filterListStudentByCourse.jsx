const STUDENTS = import.meta.env.VITE_STUDENTS;
const TOKEN = import.meta.env.VITE_TOKEN_STUDENTS;

export const filterListStudentByCourse = async (course) => {
  try {
    const response = await fetch(`${STUDENTS}/filtrar/${course}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error al buscar estudiantes: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en filterListStudentByCourse:", error);
    throw error;
  }
};
