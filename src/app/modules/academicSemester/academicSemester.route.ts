import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validationRequest from '../../utils/validationRequest';

import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequest(
    AcademicSemesterValidations.createAcademicSemesterValidaionSchema,
  ),
  AcademicSemesterController.createAcademicSemester,
);
router.get('/get-academic-semesters', AcademicSemesterController.getAcademicSemesters);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudents);

export const AcademicSemesterRoutes = router;
