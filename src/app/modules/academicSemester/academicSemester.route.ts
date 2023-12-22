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
router.get(
  '/get-academic-semesters',
  AcademicSemesterController.getAcademicSemesters,
);
router.get(
  '/get-single-semester/:semesterId',
  AcademicSemesterController.getSingleAcademicSemester,
);
router.patch(
  '/update-single-semester/:semesterId',
  validationRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidaionSchema,
  ),
  AcademicSemesterController.updateSingleAcademicSemester,
);

export const AcademicSemesterRoutes = router;
