import { RequestHandler } from "express";
import { UserService } from "./user.service";
import sendResoponse from "../../utils/sendResponse";
import httpStatus from "http-status";


const createStudent : RequestHandler = async (req, res, next) => {
    try {
      const {password, student: StudentData } = req.body;
      const result = await UserService.createStudentIntoDB(password, StudentData);
      sendResoponse(res, {statusCode: httpStatus.OK, success: true, message: 'Student created successfully', data: result})
    } catch (err) {
      next(err);
    }
  };

export const UserController = {
    createStudent
  }