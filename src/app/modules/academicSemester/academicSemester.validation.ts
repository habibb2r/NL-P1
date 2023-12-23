import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from './academicSemester.constant';

const createAcademicSemesterValidaionSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Month] as [string, ...string[]]),
    endMonth: z.enum([...Month] as [string, ...string[]]),
  }),
});

const updateAcademicSemesterValidaionSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...AcademicSemesterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...Month] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Month] as [string, ...string[]]).optional(),
  }),
});

export const AcademicSemesterValidations = { 
  createAcademicSemesterValidaionSchema,
  updateAcademicSemesterValidaionSchema,
};
