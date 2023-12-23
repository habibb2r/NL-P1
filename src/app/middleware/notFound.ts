/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
    return res.status(httpStatus.NOT_FOUND).json({
        success : false,
        message : 'API not found',
        error : ''
    });
};

export default notFound