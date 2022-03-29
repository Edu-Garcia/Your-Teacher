import express from 'express';
import cors from 'cors';
import path from 'path';
import { multerConfig } from './config/multer';
import multer from 'multer';
import { ensureTeacher, ensureAuthenticated } from './middlewares'
import {
  CreateUserController,
  CreateTeacherController,
  CreateDisciplineController,
  CreateAnnouncementController,
  CreateScheduleController,
  AuthenticateUserController,
  ShowUserController,
  ShowTeacherController,
  ShowAnnouncementController,
  ListAnnouncementsController,
  ListDisciplinesController,
  ListSchedulesController,
  DeleteAnnouncementController,
  DeleteDisciplineController,
  DeleteUserController,
  DeleteTeacherController,
  DeleteScheduleController,
  UpdateUserController,
  UpdateTeacherController,
  UpdateDisciplineController,
  UpdateAnnouncementController
} from './controllers'

const router = express();

const authenticateUserController = new AuthenticateUserController();

const createUserController = new CreateUserController();
const createTeacherController = new CreateTeacherController();
const createDisciplineController = new CreateDisciplineController();
const createAnnouncementController = new CreateAnnouncementController();
const createScheduleController = new CreateScheduleController();

const showUserController = new ShowUserController();
const showTeacherController = new ShowTeacherController();
const showAnnouncementController = new ShowAnnouncementController();
const listDisciplinesController = new ListDisciplinesController();
const listAnnouncementsController = new ListAnnouncementsController();
const listSchedulesController = new ListSchedulesController();

const deleteUserController = new DeleteUserController();
const deleteTeacherController = new DeleteTeacherController();
const deleteDisciplineController = new DeleteDisciplineController();
const deleteAnnouncementController = new DeleteAnnouncementController();
const deleteScheduleController = new DeleteScheduleController();

const updateUserController = new UpdateUserController();
const updateTeacherController = new UpdateTeacherController();
const updateDisciplineController = new UpdateDisciplineController();
const updateAnnouncementController = new UpdateAnnouncementController();

router.use('/files', express.static(path.resolve('uploads')));

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  router.use(cors());
  next();
});

router.post("/api/users", createUserController.handle);
router.post("/api/login", authenticateUserController.handle);
router.post("/api/teachers", ensureAuthenticated, createTeacherController.handle);
router.post(
  "/api/announcements",
  ensureAuthenticated,
  ensureTeacher,
  multer(multerConfig).single('file'),
  createAnnouncementController.handle
);
router.post(
  "/api/schedules",
  ensureAuthenticated,
  ensureTeacher,
  createScheduleController.handle
);
router.post(
  "/api/disciplines",
  ensureAuthenticated,
  ensureTeacher,
  createDisciplineController.handle
);

router.get("/api/users", ensureAuthenticated, showUserController.handle);
router.get("/api/teachers", ensureAuthenticated, showTeacherController.handle);
router.get("/api/announcements", ensureAuthenticated, listAnnouncementsController.handle);
router.get("/api/schedules/:id", ensureAuthenticated, listSchedulesController.handle);
router.get("/api/announcements/:id", ensureAuthenticated, showAnnouncementController.handle);
router.get("/api/disciplines", ensureAuthenticated, listDisciplinesController.handle);

router.delete("/api/users", ensureAuthenticated, deleteUserController.handle);
router.delete("/api/teachers", ensureAuthenticated, deleteTeacherController.handle);
router.delete(
  "/api/announcements/:id",
  ensureAuthenticated,
  ensureTeacher,
  deleteAnnouncementController.handle
);
router.delete(
  "/api/schedules/:id",
  ensureAuthenticated,
  ensureTeacher,
  deleteScheduleController.handle
);
router.delete(
  "/api/disciplines/:id",
  ensureAuthenticated,
  ensureTeacher,
  deleteDisciplineController.handle
);

router.put("/api/users", ensureAuthenticated, updateUserController.handle);
router.put("/api/teachers", ensureAuthenticated, updateTeacherController.handle);
router.put(
  "/api/announcements/:id",
  ensureAuthenticated,
  ensureTeacher,
  multer(multerConfig).single('file'),
  updateAnnouncementController.handle
);
router.put(
  "/api/disciplines/:id",
  ensureAuthenticated,
  ensureTeacher,
  updateDisciplineController.handle
);

export { router };