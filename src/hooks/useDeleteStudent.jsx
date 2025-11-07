import { deleteStudent } from "../services/deleteStudent";
import { useStudentContext } from "../context/StudentContext";

const useDeleteStudent = () => {
  const { clearStudent } = useStudentContext();

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      clearStudent();
      alert("Estudiante eliminado con éxito.");
    } catch (error) {
      console.error("Error eliminando estudiante:", error);
      alert("No se pudo eliminar el estudiante.");
    }
  };

  return { handleDelete };
};

export default useDeleteStudent;