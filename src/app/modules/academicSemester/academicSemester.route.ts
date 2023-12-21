import express from 'express';


const router = express.Router();

router.post('/create-academic-semester');
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudents);

export const AcademicSemesterRoutes = router;