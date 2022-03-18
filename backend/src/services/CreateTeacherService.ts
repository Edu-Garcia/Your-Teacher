import { getCustomRepository } from "typeorm";
import { TeachersRepositories } from "../repositories/TeachersRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ITeacherRequest {
  biography: string;
  lattes: string;
  attendance: string;
  state: string;
  city: string;
  user_id: string;
}

class CreateTeacherService {

  async execute({ biography, lattes, attendance, state, city, user_id }: ITeacherRequest) {
    const teachersRepositories = getCustomRepository(TeachersRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne({ user_id });

    if (!user_id || !userExists) {
      throw new Error("Usuário não existe!")
    }

    const teacherAlreadyExists = await teachersRepositories.findOne({ user_id });

    if (teacherAlreadyExists) {
      throw new Error("Professor já cadastrado!");
    }

    const teacher = teachersRepositories.create({
      biography,
      lattes,
      attendance,
      state,
      city,
      user_id
    });

    await teachersRepositories.save(teacher);

    return teacher;
  }
}

export { CreateTeacherService };