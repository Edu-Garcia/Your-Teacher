import { EntityRepository, Repository } from "typeorm";
import { Teacher } from "../entities/Teacher";

@EntityRepository(Teacher)
class TeachersRepositories extends Repository<Teacher> { }

export { TeachersRepositories };