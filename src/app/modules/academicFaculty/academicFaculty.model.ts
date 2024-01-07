
import { Schema, model } from 'mongoose';
import { AcademicFaculty } from './academicFaculty.interface';


const academicFacultySchema = new Schema<AcademicFaculty>(
  {
    name: {
      type: 'String',
      required: true,
      unique: true
    },
    
  },
  {
    timestamps: true,
  },
);


export const AcademicFacultyModel =  model<AcademicFaculty>('AcademicFaculty', academicFacultySchema)
