import { Request, Response } from "express";
import { DeleteScheduleService } from "../services";

class DeleteScheduleController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteScheduleService = new DeleteScheduleService();

    const result = await deleteScheduleService.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).json({ message: 'Deletado com sucesso!' });
  }
}

export { DeleteScheduleController };