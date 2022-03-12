import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1642125088586 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tb_user",
        columns: [
          {
            name: "user_id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "fullname",
            type: "varchar"
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          },
          {
            name: "birth_date",
            type: "date"
          },
          {
            name: "phone",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tb_user")
  }

}
