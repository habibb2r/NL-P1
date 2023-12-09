import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";

const router = Router();


router.use('/users', UserRoutes);
router.use('/students', StudentRoutes)

export default router