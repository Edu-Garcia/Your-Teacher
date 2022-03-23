import { getCustomRepository } from "typeorm";
import { AnnouncementsRepositories } from "../repositories";

class DeleteAnnouncementService {
  async execute(announcement_id: string) {
    const announcementsRepositories = getCustomRepository(AnnouncementsRepositories);
    const announcementExists = announcementsRepositories.findOne({ announcement_id })

    if (!announcement_id || !announcementExists) {
      return new Error("Anúncio não encontrado!")
    }

    await announcementsRepositories.delete(announcement_id);
  }
}

export { DeleteAnnouncementService };