import { StudentServices } from './student.service';
import { NextFunction, Request, Response } from 'express';



const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFormDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student is retrived successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
 
  getAllStudents,
  getSingleStudents,
};
