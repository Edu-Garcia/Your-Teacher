import { getCustomRepository } from "typeorm";
import { TeachersRepositories } from "../repositories";

interface ITeacherRequest {
  biography: string;
  lattes: string;
  attendance: string;
  state: string;
  city: string;
  user_id: string;
}

class UpdateTeacherService {

  async execute({ biography, lattes, attendance, state, city, user_id }: ITeacherRequest) {
    const teachersRepositories = getCustomRepository(TeachersRepositories);

    const teacher = await teachersRepositories.findOne({ user_id });

    if (!teacher) {
      throw new Error("Professor não encontrado!");
    }

    teacher.biography = biography ? biography : teacher.biography
    teacher.lattes = lattes ? lattes : teacher.lattes
    teacher.attendance = attendance ? attendance : teacher.attendance
    teacher.state = state ? state : teacher.state
    teacher.city = city ? city : teacher.city

    await teachersRepositories.save(teacher);

    return teacher;
  }
}

export { UpdateTeacherService };