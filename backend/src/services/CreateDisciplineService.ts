import { getCustomRepository } from "typeorm";
import { DisciplinesRepositories } from "../repositories/DisciplinesRepositories";

interface IDisciplineRequest {
  name: string;
  description: string;
}

class CreateDisciplineService {

  async execute({ name, description }: IDisciplineRequest) {
    const disciplinesRepositories = getCustomRepository(DisciplinesRepositories);

    if (!name) {
      throw new Error("Nome inválido!")
    }

    name = name.toLowerCase();

    const disciplineAlreadyExists = await disciplinesRepositories.findOne({ name });

    if (disciplineAlreadyExists) {
      throw new Error("Disciplina já existente!");
    }

    const discipline = disciplinesRepositories.create({ name, description });

    await disciplinesRepositories.save(discipline);

    return discipline;
  }
}

export { CreateDisciplineService };