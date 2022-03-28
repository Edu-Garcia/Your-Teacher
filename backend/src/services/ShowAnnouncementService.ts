import { instanceToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { AnnouncementsRepositories } from "../repositories";

class ShowAnnouncementService {
  async execute(announcement_id: string) {
    const announcementsRepositories = getCustomRepository(AnnouncementsRepositories);

    const announcement = announcementsRepositories.find({
      where: { announcement_id },
      relations: ["teacher", "discipline"]
    });

    return instanceToPlain(announcement);
  }
}

export { ShowAnnouncementService };