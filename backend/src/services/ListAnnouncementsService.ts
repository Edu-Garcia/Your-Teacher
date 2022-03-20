import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { AnnouncementsRepositories } from "../repositories";

class ListAnnouncementsService {
  async execute() {
    const announcementsRepositories = getCustomRepository(AnnouncementsRepositories);

    const announcements = announcementsRepositories.find({
      relations: ["teacher", "discipline"]
    })

    return instanceToPlain(announcements);
  }
}

export { ListAnnouncementsService };