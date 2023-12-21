import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './academinSemester.interface';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: Month,
    },
    endMonth: {
      type: String,
      required: true,
      enum: Month,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemsterExits = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemsterExits) {
    throw new Error('Semester Already exists');
  }
  next();
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
