/* eslint-disable @typescript-eslint/no-unused-vars */
import { StudentServices } from './student.service';
import { NextFunction, Request, RequestHandler, Response } from 'express';


const catchAsync = (fn: RequestHandler) =>{
  return (req: Request, res: Response, next: NextFunction) =>{
    Promise.resolve(fn(req, res, next)).catch((err)=> next(err));
  }
}

// eslint-disable-next-line no-unused-vars
const getAllStudents = catchAsync(async (req, res, next) => {
      const result = await StudentServices.getAllStudentsFormDB();
      res.status(200).json({
        success: true,
        message: 'Students are retrived successfully',
        data: result,
      });
  }
)

const getSingleStudents : RequestHandler = async (req, res, next) => {
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
