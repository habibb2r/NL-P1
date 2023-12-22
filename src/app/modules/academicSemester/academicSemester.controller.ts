import sendResoponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  //   const { password, student: StudentData } = req.body;
  const result = await AcademicSemesterServices.createAcademicSemseterIntoDB(
    req.body,
  );
  sendResoponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

const getAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicSemestersFromDB();
  sendResoponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters retrived successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const {semesterId} = req.params
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
  sendResoponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters retrived successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
};
