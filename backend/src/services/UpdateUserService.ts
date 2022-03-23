import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories";

interface IUserRequest {
  user_id: string;
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birth_date: Date;
  phone: string;
}

class UpdateUserService {

  async execute({ user_id, fullname, email, password, birth_date, phone }: IUserRequest) {

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

    const user = await usersRepositories.findOne({ user_id });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const emailAlreadyExists = email && await usersRepositories.findOne({ email });

    if (emailAlreadyExists && emailAlreadyExists.user_id !== user_id) {
      throw new Error("E-mail já cadastrado!");
    }

    if (birth_date) {
      if (Object.prototype.toString.call(birth_date) !== '[object Date]') {
        birth_date = new Date(birth_date);
      }

      if (birth_date.getFullYear() < 1900) {
        throw new Error("Data inválida!");
      }

      if (calculateAge() < 18) {
        throw new Error("É necessário ter 18 anos ou mais para realizar o cadastro!");
      }
    }


    const passwordHash = password && await hash(password, 8);

    user.fullname = fullname ? fullname : user.fullname;
    user.email = email ? email : user.email;
    user.password = passwordHash ? passwordHash : user.password;
    user.birth_date = birth_date ? birth_date : user.birth_date;
    user.phone = phone ? phone : user.phone;

    await usersRepositories.save(user);

    return user;
  }
}

export { UpdateUserService };