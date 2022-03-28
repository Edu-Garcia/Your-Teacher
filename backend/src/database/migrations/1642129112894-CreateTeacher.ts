import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTeacher1642129112894 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tb_teacher",
        columns: [
          {
            name: "teacher_id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "biography",
            type: "varchar"
          },
          {
            name: "lattes",
            type: "varchar",
            isNullable: true
          },
          {
            name: "attendance",
            type: "varchar"
          },
          {
            name: "state",
            type: "varchar"
          },
          {
            name: "city",
            type: "varchar"
          },
          {
            name: "user_id",
            type: "uuid"
          },
        ],
        foreignKeys: [
          {
            name: "fk_teacher_user",
            columnNames: ["user_id"],
            referencedTableName: "tb_user",
            referencedColumnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tb_teacher")
  }

}
