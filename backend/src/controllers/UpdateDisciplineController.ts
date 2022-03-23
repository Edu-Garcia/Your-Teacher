import { Request, Response } from "express";
import { UpdateDisciplineService } from "../services";

class UpdateDisciplineController {

  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const { id } = request.params;

    const updateDisciplineService = new UpdateDisciplineService();

    const discipline = await updateDisciplineService.execute({
      id,
      name,
      description
    });

    return response.json(discipline);
  }
}

export { UpdateDisciplineController };