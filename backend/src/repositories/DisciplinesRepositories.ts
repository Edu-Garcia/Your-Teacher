import { EntityRepository, Repository } from 'typeorm';
import { Discipline } from '../entities/Discipline';

@EntityRepository(Discipline)
class DisciplinesRepositories extends Repository<Discipline> { }

export { DisciplinesRepositories };