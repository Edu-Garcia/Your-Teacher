import { getCustomRepository } from "typeorm";
import { SchedulesRepositories } from "../repositories";

class DeleteScheduleService {
  async execute(schedule_id: string) {
    const schedulesRepositories = getCustomRepository(SchedulesRepositories);
    const scheduleExists = schedulesRepositories.findOne({ schedule_id })

    if (!schedule_id || !scheduleExists) {
      return new Error("Evento não encontrado!")
    }

    await schedulesRepositories.delete(schedule_id);
  }
}

export { DeleteScheduleService };