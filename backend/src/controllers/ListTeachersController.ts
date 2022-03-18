import { Request, Response } from "express";
import { ListTeachersService } from "../services/ListTeachersService";


class ListTeachersController {
  async handle(request: Request, response: Response) {
    const listTeachersService = new ListTeachersService();

    const teachers = await listTeachersService.execute();

    return response.json(teachers);
  }
}

export { ListTeachersController };