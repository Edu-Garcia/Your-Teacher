import { getCustomRepository } from "typeorm";
import { TeachersRepositories } from "../repositories";

class DeleteTeacherService {
  async execute(user_id: string) {
    const teachersRepositories = getCustomRepository(TeachersRepositories);
    const teacherExists = teachersRepositories.findOne({ user_id })

    if (!user_id || !teacherExists) {
      return new Error("Professor não encontrado!")
    }

    await teachersRepositories.delete({ user_id });
  }
}

export { DeleteTeacherService };