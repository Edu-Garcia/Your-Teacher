import { getCustomRepository } from "typeorm";
import { SchedulesRepositories } from "../repositories";

class ListSchedulesService {
  async execute(announcement_id: string) {
    const schedulesRepositories = getCustomRepository(SchedulesRepositories);

    const schedules = schedulesRepositories.find({ where: { announcement_id } })

    return schedules;
  }
}

export { ListSchedulesService };