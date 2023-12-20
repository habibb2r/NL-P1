import express, {  } from 'express';
import { UserController } from './user.controller';
import validationRequest from '../../utils/validationRequest';
import { createStudentValidationSchema } from '../student/student.validation';

const router = express.Router();



router.post('/create-student', validationRequest(createStudentValidationSchema), UserController.createStudent)

export const UserRoutes = router;