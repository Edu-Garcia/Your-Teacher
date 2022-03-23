import { Request, Response } from "express";
import { ListDisciplinesService } from "../services";

class ListDisciplinesController {
  async handle(request: Request, response: Response) {
    const listDisciplinesService = new ListDisciplinesService();

    const disciplines = await listDisciplinesService.execute();

    return response.json(disciplines);
  }
}

export { ListDisciplinesController };