import {Router} from "express";
import productController from "../controller/TeacherController";
import {auth} from "../middleware/jwt";

const teacherRouter = Router();
teacherRouter.use(auth)
teacherRouter.get('', productController.findAll);
teacherRouter.get('/:id', productController.findById);
teacherRouter.post('', productController.add);
teacherRouter.put('/:id', productController.update);
teacherRouter.delete('/:id', productController.delete);
export default teacherRouter;
