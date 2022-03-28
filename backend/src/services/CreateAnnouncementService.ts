import { getCustomRepository } from "typeorm";
import {
  TeachersRepositories,
  DisciplinesRepositories,
  AnnouncementsRepositories
} from "../repositories";

interface IAnnouncementRequest {
  title: string;
  description: string;
  cost: number;
  school_level: string;
  image_name: string | null;
  user_id: string;
  discipline_id: string;
}

class CreateAnnouncementService {
  async execute({
    title,
    description,
    cost,
    school_level,
    image_name,
    user_id,
    discipline_id
  }: IAnnouncementRequest) {
    const announcementsRepositories = getCustomRepository(AnnouncementsRepositories);
    const teachersRepositories = getCustomRepository(TeachersRepositories);
    const disciplinesRepositories = getCustomRepository(DisciplinesRepositories);

    const teacherExists = await teachersRepositories.findOne({ user_id });

    if (!user_id || !teacherExists) {
      throw new Error("Professor não existe!")
    }

    const disciplineExists = await disciplinesRepositories.findOne({ discipline_id });

    if (!discipline_id || !disciplineExists) {
      throw new Error("Disciplina não existe!")
    }

    const announcement = announcementsRepositories.create({
      title,
      description,
      cost,
      school_level,
      image_name,
      teacher_id: teacherExists.teacher_id,
      discipline_id
    });

    await announcementsRepositories.save(announcement);

    return announcement;
  }
}

export { CreateAnnouncementService };