import { createContext, useContext, useState } from "react";
import { getStudent } from "../services/getStudent";

const StudentContext = createContext();

 const StudentProvider = ({ children }) => {
  const [studentSelected, setStudentSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadStudent = async (id) => {
    try {
      setLoading(true);
      const result = await getStudent(id);
      setStudentSelected(result);
    } catch (error) {
      console.error("Error cargando estudiante:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearStudent = () => setStudentSelected(null);

  return (
    <StudentContext.Provider
      value={{ studentSelected, setStudentSelected, loadStudent, clearStudent, loading }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);

export default StudentProvider;