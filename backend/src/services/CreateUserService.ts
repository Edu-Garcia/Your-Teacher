import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories";

interface IUserRequest {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birth_date: Date;
  phone: string;
}

class CreateUserService {

  async execute({ fullname, email, password, confirmPassword, birth_date, phone }: IUserRequest) {
    const calculateAge = () => {
      return Math.floor(
        Math.ceil(
          Math.abs(
            birth_date.getTime() - new Date().getTime()
          ) / (1000 * 3600 * 24)
        ) / 365.25
      );
    };

    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("E-mail incorreto!");
    }

    const userAlreadyExist = await usersRepositories.findOne({ email });

    if (userAlreadyExist) {
      throw new Error("E-mail já cadastrado!");
    }

    if (password !== confirmPassword) {
      throw new Error("Confirmação de senha incorreta!");
    }

    if (Object.prototype.toString.call(birth_date) !== '[object Date]') {
      birth_date = new Date(birth_date);
    }

    if (birth_date.getFullYear() < 1900) {
      throw new Error("Data inválida!");
    }

    if (calculateAge() < 18) {
      throw new Error("É necessário ter 18 anos ou mais para realizar o cadastro!");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepositories.create({
      fullname,
      email,
      password: passwordHash,
      birth_date,
      phone
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };