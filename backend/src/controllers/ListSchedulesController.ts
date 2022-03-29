import { Request, Response } from "express";
import { ListSchedulesService } from "../services";

class ListSchedulesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const listSchedulesService = new ListSchedulesService();

    const schedules = await listSchedulesService.execute(id);

    return response.json(schedules);
  }
}

export { ListSchedulesController };