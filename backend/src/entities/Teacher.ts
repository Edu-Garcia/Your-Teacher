import { Exclude } from "class-transformer";
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("tb_teacher")
class Teacher {

  @PrimaryColumn()
  readonly teacher_id: string;

  @Column()
  biography: string;

  @Column()
  lattes: string;

  @Column()
  attendance: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Exclude()
  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @OneToOne(() => User, { eager: true })
  user: User;

  constructor() {
    if (!this.teacher_id) {
      this.teacher_id = uuid();
    }
  }
}

export { Teacher }