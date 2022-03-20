import { Request, Response } from "express";
import { CreateDisciplineService } from "../services";

class CreateDisciplineController {

  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createDisciplineService = new CreateDisciplineService();

    const discipline = await createDisciplineService.execute({ name, description });

    return response.json(discipline);
  }
}

export { CreateDisciplineController };