import { Schema, model } from 'mongoose';
import { TAcademicSemester, TMonth } from './academinSemester.interface';

const Month: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: Month,
    },
    endMonth: {
      type: String,
      enum: Month,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
