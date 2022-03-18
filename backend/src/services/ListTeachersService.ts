import { getCustomRepository } from "typeorm";
import { TeachersRepositories } from "../repositories/TeachersRepositories";


class ListTeachersService {
  async execute() {
    const teachersRepositories = getCustomRepository(TeachersRepositories);

    const teachers = teachersRepositories.find({
      relations: ["user"]
    })

    return teachers;
  }
}

export { ListTeachersService };