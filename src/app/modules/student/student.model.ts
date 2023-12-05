import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name Required'],
    maxlength: [20, 'First Name can not be more than 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in campitalize format',
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last Name Required'] },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Name is Required'] },
  occupation: { type: String, required: [true, 'Occupation is Required'] },
  contactNumber: { type: String, required: [true, 'is Required'] },
  address: { type: String, required: [true, 'is Required'] },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father name is Required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Occupation is Required'],
  },
  fatherContactNumber: {
    type: String,
    required: [true, 'Contact number is Required'],
  },
  motherName: { type: String, required: [true, 'Mother name is Required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Occupation is Required'],
  },
  motherContactNumber: {
    type: String,
    required: [true, 'Contact number is Required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: [true, 'id is Required'], unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is Required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid',
    },
    required: [true, 'Gender is Required'],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is Required'], unique: true },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is Required'],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, 'Emergency conatact number is Required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is Required'],
  },
  parmanentAddress: {
    type: String,
    required: [true, 'Parmanent address is Required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is Required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardina information is Required'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
