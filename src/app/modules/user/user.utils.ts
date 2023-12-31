import { TAcademicSemester } from "../academicSemester/academinSemester.interface";
import { UserModel } from "./user.model";

const findLastStudent = async()=>{
      const lastStudent = await UserModel.findOne({
            role: 'student'
      },{
            id: 1,
            _id: 0
      }).lean();

      return lastStudent?.id? lastStudent.id : undefined
}


const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};
export const generateStudentId = async (payload: TAcademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
