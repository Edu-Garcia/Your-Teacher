import { Request, Response } from "express";
import { ShowTeacherService } from "../services";

class ShowTeacherController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const showTeacherService = new ShowTeacherService()

    const teacher = await showTeacherService.execute(user_id);

    return response.json(teacher)
  }
}

export { ShowTeacherController };