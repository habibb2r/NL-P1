import {z} from 'zod';

const createAcademicSemesterValidaionSchema = z.object({
  body: z.object({
    name: z.enum()
  })

})

export const AcademicSemesterValidations = {
    createAcademicSemesterValidaionSchema
}