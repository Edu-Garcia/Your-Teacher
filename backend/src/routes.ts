import { Router } from 'express';
import { CreateDisciplineController } from './controllers/CreateDisciplineController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTeacherController } from './controllers/CreateTeacherController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureTeacher } from './middlewares/ensureTeacher';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListTeachersController } from './controllers/ListTeachersController';

const router = Router();

const createUserController = new CreateUserController();
const createDisciplineController = new CreateDisciplineController();
const createTeacherController = new CreateTeacherController();
const authenticateUserController = new AuthenticateUserController();
const listTeachersController = new ListTeachersController();

router.post("/api/users", createUserController.handle)
router.post("/api/login", authenticateUserController.handle)
router.post("/api/teachers", ensureAuthenticated, createTeacherController.handle)
router.post(
  "/api/disciplines",
  ensureAuthenticated,
  ensureTeacher,
  createDisciplineController.handle
)

router.get("/api/teachers", ensureAuthenticated, listTeachersController.handle)

export { router };