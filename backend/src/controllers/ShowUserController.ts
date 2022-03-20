import { Request, Response } from "express";
import { ShowUserService } from "../services";

class ShowUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const showUserService = new ShowUserService()

    const user = await showUserService.execute(user_id);

    return response.json(user)
  }
}

export { ShowUserController };