import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStudentContext } from "../context/StudentContext";

const useStudentsSelected = () => {
  const { id } = useParams();
  const { studentSelected, loadStudent, loading } = useStudentContext();

  useEffect(() => {
    if (id) loadStudent(id);
  }, [id]);

  return { id, studentSelected, loading };
};

export default useStudentsSelected;