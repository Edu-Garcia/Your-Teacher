import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("tb_user")
class User {

  @PrimaryColumn()
  readonly user_id: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  birth_date: Date;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.user_id) {
      this.user_id = uuid();
    }
  }

}

export { User };