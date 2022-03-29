import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Announcement } from "./Announcement";

@Entity("tb_schedule")
class Schedule {

  @PrimaryColumn()
  readonly schedule_id: string;

  @Column()
  title: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  announcement_id: string;

  @JoinColumn({ name: "announcement_id" })
  @ManyToOne(() => Announcement)
  announcement: Announcement;

  constructor() {
    if (!this.schedule_id) {
      this.schedule_id = uuid();
    }
  }
}

export { Schedule }