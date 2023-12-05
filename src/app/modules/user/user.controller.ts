import { Request, Response } from "express";
import { UserService } from "./user.service";


const createStudent = async (req: Request, res: Response) => {
    try {
      const {password, student: StudentData } = req.body;
      const result = await UserService.createStudentIntoDB(password, StudentData);
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

export const UserController = {
    createStudent
  }