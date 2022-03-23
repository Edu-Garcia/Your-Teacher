import { Request, Response } from "express";
import { DeleteUserService } from "../services";

class DeleteUserController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const deleteUserService = new DeleteUserService();

    const result = await deleteUserService.execute(user_id);

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).json({ message: 'Deletado com sucesso!' });
  }
}

export { DeleteUserController };