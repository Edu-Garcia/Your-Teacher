import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories";

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
        user: {
          email: user.email,
          fullname: user.fullname,
          phone: user.phone,
          birth_date: user.birth_date
        }
      },
      process.env.JWT_KEY,
      {
        subject: user.user_id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };