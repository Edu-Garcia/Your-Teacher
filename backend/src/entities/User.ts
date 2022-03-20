import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Exclude, Expose } from "class-transformer";

@Entity("tb_user")
class User {

  @PrimaryColumn()
  readonly user_id: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column()
  birth_date: Date;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @Expose({ name: "capitalized_fullname" })
  capitalizedFullname(): string {
    let prepos = ["da", "do", "das", "dos", "a", "e", "de"];

    return (
      this.fullname
        .split(' ')
        .map((text) => {
          text = text.toLowerCase();
          if (prepos.includes(text)) {
            return text;
          }
          return text.charAt(0).toUpperCase() + text.slice(1);
        })
        .join(' ')
    );
  }

  constructor() {
    if (!this.user_id) {
      this.user_id = uuid();
    }
  }

}

export { User };