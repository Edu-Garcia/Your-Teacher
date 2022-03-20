import { Router } from 'express';
import { ensureTeacher, ensureAuthenticated } from './middlewares'
import {
  CreateUserController,
  CreateTeacherController,
  CreateDisciplineController,
  CreateAnnouncementController,
  AuthenticateUserController,
  ListAnnouncementsController,
  ShowUserController,
} from './controllers'

import { multerConfig } from './config/multer';
import multer from 'multer';

const router = Router();

const createUserController = new CreateUserController();
const createDisciplineController = new CreateDisciplineController();
const createTeacherController = new CreateTeacherController();
const createAnnouncementController = new CreateAnnouncementController();

const authenticateUserController = new AuthenticateUserController();
const showUserController = new ShowUserController();
const listAnnouncementsController = new ListAnnouncementsController();

router.post("/api/users", createUserController.handle);
router.post("/api/login", authenticateUserController.handle);
router.post("/api/teachers", ensureAuthenticated, createTeacherController.handle);
router.post(
  "/api/announcement",
  ensureAuthenticated,
  ensureTeacher,
  multer(multerConfig).single('file'),
  createAnnouncementController.handle
);
router.post(
  "/api/disciplines",
  ensureAuthenticated,
  ensureTeacher,
  createDisciplineController.handle
);

router.get("/api/user", ensureAuthenticated, showUserController.handle);
router.get("/api/announcements", ensureAuthenticated, listAnnouncementsController.handle);

export { router };