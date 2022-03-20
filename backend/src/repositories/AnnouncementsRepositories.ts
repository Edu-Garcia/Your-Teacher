import { EntityRepository, Repository } from 'typeorm';
import { Announcement } from '../entities/Announcement';

@EntityRepository(Announcement)
class AnnouncementsRepositories extends Repository<Announcement> { }

export { AnnouncementsRepositories };