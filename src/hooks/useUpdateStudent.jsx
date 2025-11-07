import { updateStudent } from "../services/updateStudent";
import { useStudentContext } from "../context/StudentContext";

const useUpdateStudent = () => {
  const { loadStudent } = useStudentContext();

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateStudent(id, updatedData);
      await loadStudent(id); // refresca el contexto con los nuevos datos
      alert("Estudiante actualizado correctamente.");
    } catch (error) {
      console.error("Error actualizando estudiante:", error);
      alert("No se pudo actualizar el estudiante.");
    }
  };

  return { handleUpdate };
};

export default useUpdateStudent;