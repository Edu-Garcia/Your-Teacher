import { Request, Response } from "express";
import { DeleteTeacherService } from "../services";

class DeleteTeacherController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const deleteTeacherService = new DeleteTeacherService();

    const result = await deleteTeacherService.execute(user_id);

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).json({ message: 'Deletado com sucesso!' });
  }
}

export { DeleteTeacherController };