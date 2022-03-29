import { Request, Response } from "express";
import { CreateScheduleService } from "../services";

class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { title, start, end, announcement_id } = request.body;

    const createScheduleService = new CreateScheduleService();

    const schedule = await createScheduleService.execute({
      title,
      start,
      end,
      announcement_id
    })


    return response.json(schedule);
  }
}

export { CreateScheduleController };