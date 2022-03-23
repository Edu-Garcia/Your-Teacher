import { Request, Response } from "express";
import { UpdateUserService } from "../services";

class UpdateUserController {

  async handle(request: Request, response: Response) {
    const { fullname, email, password, confirmPassword, birth_date, phone } = request.body;
    const { user_id } = request;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      user_id,
      fullname: fullname.toLowerCase(),
      email,
      password,
      confirmPassword,
      birth_date,
      phone
    })

    return response.json(user);
  }
}

export { UpdateUserController };