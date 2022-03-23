import { getCustomRepository } from "typeorm";
import { DisciplinesRepositories, AnnouncementsRepositories } from "../repositories";

interface IAnnouncementRequest {
  id: string,
  title: string;
  description: string;
  cost: number;
  school_level: string;
  image_name: string;
  discipline_id: string;
}

class UpdateAnnouncementService {
  async execute({
    id,
    title,
    description,
    cost,
    school_level,
    image_name,
    discipline_id
  }: IAnnouncementRequest) {
    const announcementsRepositories = getCustomRepository(AnnouncementsRepositories);
    const disciplinesRepositories = getCustomRepository(DisciplinesRepositories);

    const announcement = await announcementsRepositories.findOne({ announcement_id: id });

    if (!announcement) {
      throw new Error("Anúncio não encontrado!");
    }

    const discipline = await disciplinesRepositories.findOne(discipline_id);

    if (!discipline_id || !discipline) {
      throw new Error("Disciplina não existe!")
    }

    announcement.title = title ? title : announcement.title;
    announcement.description = description ? description : announcement.description;
    announcement.cost = cost ? cost : announcement.cost;
    announcement.school_level = school_level ? school_level : announcement.school_level;
    announcement.image_name = image_name ? image_name : announcement.image_name;
    announcement.discipline_id = discipline ? discipline.discipline_id : announcement.discipline_id;

    await announcementsRepositories.save(announcement);

    return announcement;
  }
}

export { UpdateAnnouncementService };