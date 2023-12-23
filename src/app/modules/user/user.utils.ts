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

export const generateStudentId = (payload: TAcademicSemester)=>{
      const currentId = (0).toString();
      let incrementId = (Number(currentId+1).toString().padStart(4, '0'));

      incrementId = `${payload.year}${payload.code}${incrementId}`

      return incrementId;
}