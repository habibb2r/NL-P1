import { Student } from './../student/student.interface';
import config from "../../config";
import { StudentModel } from "../student/student.model";
import { User } from "./user.interface";
import { UserModel } from "./user.model";
import { TAcademicSemester } from '../academicSemester/academinSemester.interface';
import { AcademicSemesterModel } from '../academicSemester/academinSemester.model';
import { generateStudentId } from './user.utils';

const createStudentIntoDB = async (password : string, payload: Student) => {
    
    //create a user object
    const userData : Partial<User> = {};


    userData.password = password || (config.default_password as string)

    //set student role

    userData.role = 'student';

    

    const academicSemester = await  AcademicSemesterModel.findById(payload.admissionSemester)
    //set manually generated id
    userData.id = generateStudentId(academicSemester)

    //create user
    const newUser = await UserModel.create(userData);

    //create a student
    if(Object.keys(newUser).length){
        //set id, _id as user
        payload.id = newUser.id;
        payload.user = newUser._id //reference _id

        const newStudent = await StudentModel.create(payload);
        return newStudent;

    }
  };

  export  const UserService ={
    createStudentIntoDB
  }