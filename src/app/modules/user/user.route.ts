import express, { RequestHandler } from 'express';
import { UserController } from './user.controller';

const router = express.Router();

const senabahini: RequestHandler = (req, res,  next)=>{
    console.log('got data sent to senabahini');
    next()
}

router.post('/create-student', senabahini, UserController.createStudent)

export const UserRoutes = router;