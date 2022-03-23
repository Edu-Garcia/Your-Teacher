import { getCustomRepository } from "typeorm";
import { DisciplinesRepositories } from "../repositories";

interface IDisciplineRequest {
  id: string;
  name: string;
  description: string;
}

class UpdateDisciplineService {

  async execute({ id, name, description }: IDisciplineRequest) {
    const disciplinesRepositories = getCustomRepository(DisciplinesRepositories);

    const discipline = await disciplinesRepositories.findOne({ discipline_id: id });

    if (!discipline) {
      throw new Error("Disciplina não encontrada!")
    }

    name = name.toLowerCase();

    const disciplineAlreadyExists = await disciplinesRepositories.findOne({ name });

    if (disciplineAlreadyExists && disciplineAlreadyExists.name !== discipline.name) {
      throw new Error("Disciplina já existente!");
    }

    discipline.name = name ? name : discipline.name
    discipline.description = description ? description : discipline.description

    await disciplinesRepositories.save(discipline);

    return discipline;
  }
}

export { UpdateDisciplineService };