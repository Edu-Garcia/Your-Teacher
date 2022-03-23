import { getCustomRepository } from "typeorm";
import { DisciplinesRepositories } from "../repositories";

class ListDisciplinesService {
  async execute() {
    const disciplinesRepositories = getCustomRepository(DisciplinesRepositories);

    const disciplines = disciplinesRepositories.find()

    return disciplines;
  }
}

export { ListDisciplinesService };