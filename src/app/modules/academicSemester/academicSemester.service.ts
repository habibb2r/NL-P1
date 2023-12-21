import { TAcademicSemester } from "./academinSemester.interface"
import { AcademicSemesterModel } from "./academinSemester.model"


const createAcademicSemseterIntoDB = async (payload: TAcademicSemester)=>{
    const result = await  AcademicSemesterModel.create(payload);
    return result;

}

export const AcademicSemesterServices = {
    createAcademicSemseterIntoDB
}