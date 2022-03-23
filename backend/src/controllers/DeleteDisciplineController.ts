import { Request, Response } from "express";
import { DeleteDisciplineService } from "../services";

class DeleteDisciplineController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteDisciplineService = new DeleteDisciplineService();

    const result = await deleteDisciplineService.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).json({ message: 'Deletado com sucesso!' });
  }
}

export { DeleteDisciplineController };