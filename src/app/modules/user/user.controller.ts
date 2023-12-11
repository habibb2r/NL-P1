import { UserService } from './user.service';
import sendResoponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: StudentData } = req.body;
  const result = await UserService.createStudentIntoDB(password, StudentData);
  sendResoponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
