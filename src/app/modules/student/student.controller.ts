import { StudentServices } from './student.service';
import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(StudentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFormDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
