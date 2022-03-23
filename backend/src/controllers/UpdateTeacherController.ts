import { Request, Response } from "express";
import { UpdateTeacherService } from "../services";

class UpdateTeacherController {

  async handle(request: Request, response: Response) {
    const { biography, lattes, attendance, state, city } = request.body;
    const { user_id } = request;

    const updateTeacherService = new UpdateTeacherService();

    const user = await updateTeacherService.execute({
      biography,
      lattes,
      attendance,
      state,
      city,
      user_id
    })

    return response.json(user);
  }
}

export { UpdateTeacherController };