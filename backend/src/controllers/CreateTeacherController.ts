import { Request, Response } from "express";
import { CreateTeacherService } from "../services/CreateTeacherService";


class CreateTeacherController {

  async handle(request: Request, response: Response) {
    const { biography, lattes, attendance, state, city } = request.body;
    const { user_id } = request;

    const createTeacherService = new CreateTeacherService();

    const user = await createTeacherService.execute({
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

export { CreateTeacherController };