import { getCustomRepository } from "typeorm";
import {
  SchedulesRepositories,
  AnnouncementsRepositories
} from "../repositories";

interface IAnnouncementRequest {
  title: string;
  start: Date;
  end: Date;
  announcement_id: string;
}

class CreateScheduleService {
  async execute({
    title,
    start,
    end,
    announcement_id,
  }: IAnnouncementRequest) {
    const schedulesRepositories = getCustomRepository(SchedulesRepositories);
    const announcementsRepositories = getCustomRepository(AnnouncementsRepositories);

    const announcementExists = await announcementsRepositories.findOne({ announcement_id });

    if (!announcement_id || !announcementExists) {
      throw new Error("Anúncio não existe!")
    }

    const schedule = schedulesRepositories.create({
      title,
      start,
      end,
      announcement_id,
    });

    await schedulesRepositories.save(schedule);

    return schedule;
  }
}

export { CreateScheduleService };