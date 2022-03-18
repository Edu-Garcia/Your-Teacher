import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("tb_discipline")
class Discipline {

  @PrimaryColumn()
  readonly discipline_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  constructor() {
    if (!this.discipline_id) {
      this.discipline_id = uuid();
    }
  }

}

export { Discipline }