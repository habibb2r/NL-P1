import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academinSemester.interface';
import { AcademicSemesterModel } from './academinSemester.model';

const createAcademicSemseterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAcademicSemestersFromDB = async() =>{
  const result = await AcademicSemesterModel.find()
  return result;
}

export const AcademicSemesterServices = {
  createAcademicSemseterIntoDB,
   getAcademicSemestersFromDB
};
