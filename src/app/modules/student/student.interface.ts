import { Model, Types } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type Student = {
  id: string;
  user: Types.ObjectId;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: Date;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A+' | 'B+' | 'A-' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
};

//for creating static

export interface StudentTypeModel extends Model<Student> {
  isUserExists(id: string): Promise<Student | null>;
}

//for creating instance

// export type StudentMethod = {
//   isUserExists(id: string): Promise<Student | null>;
// };

// export type StudentTypeModel = Model<
//   Student,
//   Record<string, never>,
//   StudentMethod
// >;
