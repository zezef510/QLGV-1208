import {Router} from "express";
import teacherRouter from "./TeacherRouter";
import {userRouter} from "./userRouter";

const router = Router();
router.use('/teachers', teacherRouter);
router.use('', userRouter);
export default router;
