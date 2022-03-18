import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {

  async handle(request: Request, response: Response) {
    const { fullname, email, password, confirmPassword, birth_date, phone } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      fullname,
      email,
      password,
      confirmPassword,
      birth_date,
      phone
    })

    return response.json(user);
  }
}

export { CreateUserController };