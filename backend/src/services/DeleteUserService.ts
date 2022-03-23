import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories";

class DeleteUserService {
  async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const userExists = usersRepositories.findOne({ user_id })

    if (!user_id || !userExists) {
      return new Error("Usuário não encontrado!")
    }

    await usersRepositories.delete(user_id);
  }
}

export { DeleteUserService };