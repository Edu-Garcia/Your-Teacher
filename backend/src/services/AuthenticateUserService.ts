import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("E-mail/Senha incorretos!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail/Senha incorretos!");
    }

    const token = sign(
      {
        email: user.email
      },
      "5dd7aae0dbc48d434b17fca1433b4283",
      {
        subject: user.user_id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };