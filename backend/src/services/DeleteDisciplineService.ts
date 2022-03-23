import { getCustomRepository } from "typeorm";
import { DisciplinesRepositories } from "../repositories";

class DeleteDisciplineService {
  async execute(discipline_id: string) {
    const disciplinesRepositories = getCustomRepository(DisciplinesRepositories);
    const disciplineExists = disciplinesRepositories.findOne({ discipline_id })

    if (!discipline_id || !disciplineExists) {
      return new Error("Disciplina não encontrado!")
    }

    await disciplinesRepositories.delete(discipline_id);
  }
}

export { DeleteDisciplineService };