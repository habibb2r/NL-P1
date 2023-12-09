import { Student } from './../student/student.interface';
import config from "../../config";
import { StudentModel } from "../student/student.model";
import { User } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password : string, studentData: Student) => {
    
    //create a user object
    const userData : Partial<User> = {};


    userData.password = password || (config.default_password as string)

    //set student role

    userData.role = 'student';

    //set manually generated id
    userData.id = '2030100001'

    //create user
    const newUser = await UserModel.create(userData);

    //create a student
    if(Object.keys(newUser).length){
        //set id, _id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id //reference _id

        const newStudent = await StudentModel.create(studentData);
        return newStudent;

    }
  };

  export  const UserService ={
    createStudentIntoDB
  }