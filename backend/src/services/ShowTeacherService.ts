import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TeachersRepositories } from "../repositories";

class ShowTeacherService {
  async execute(user_id: string) {
    const teachersRepositories = getCustomRepository(TeachersRepositories);

    const teacher = teachersRepositories.findOne({ user_id });

    return instanceToPlain(teacher);
  }
}

export { ShowTeacherService };