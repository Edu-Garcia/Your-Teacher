import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Discipline } from "./Discipline";
import { Teacher } from "./Teacher";

@Entity("tb_announcement")
class Announcement {

  @PrimaryColumn()
  readonly announcement_id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  cost: number;

  @Column()
  school_level: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  image_name: string;

  @Exclude()
  @Column()
  teacher_id: string;

  @Exclude()
  @Column()
  discipline_id: string;

  @JoinColumn({ name: "teacher_id" })
  @ManyToOne(() => Teacher)
  teacher: Teacher;

  @JoinColumn({ name: "discipline_id" })
  @ManyToOne(() => Discipline)
  discipline: Discipline;

  constructor() {
    if (!this.announcement_id) {
      this.announcement_id = uuid();
    }
  }
}

export { Announcement }