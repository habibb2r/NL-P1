import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();


router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudents);

export const StudentRoutes = router;
