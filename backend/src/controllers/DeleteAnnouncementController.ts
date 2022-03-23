import { Request, Response } from "express";
import { DeleteAnnouncementService } from "../services";

class DeleteAnnouncementController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteAnnouncementService = new DeleteAnnouncementService();

    const result = await deleteAnnouncementService.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).json({ message: 'Deletado com sucesso!' });
  }
}

export { DeleteAnnouncementController };