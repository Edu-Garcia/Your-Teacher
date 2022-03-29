import { EntityRepository, Repository } from 'typeorm';
import { Schedule } from '../entities/Schedule';

@EntityRepository(Schedule)
class SchedulesRepositories extends Repository<Schedule> { }

export { SchedulesRepositories };