
import { StudentModel } from './student.model';



const getAllStudentsFormDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFormDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  
  getAllStudentsFormDB,
  getSingleStudentFormDB,
};
