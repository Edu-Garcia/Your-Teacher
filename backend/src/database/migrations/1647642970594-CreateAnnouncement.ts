import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnnouncement1647642970594 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tb_announcement",
        columns: [
          {
            name: "announcement_id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "cost",
            type: "numeric",
          },
          {
            name: "school_level",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "image_name",
            type: "varchar",
            isNullable: true
          },
          {
            name: "teacher_id",
            type: "uuid"
          },
          {
            name: "discipline_id",
            type: "uuid"
          },
        ],
        foreignKeys: [
          {
            name: "fk_announcement_teacher",
            columnNames: ["teacher_id"],
            referencedTableName: "tb_teacher",
            referencedColumnNames: ["teacher_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          },
          {
            name: "fk_announcement_discipline",
            columnNames: ["discipline_id"],
            referencedTableName: "tb_discipline",
            referencedColumnNames: ["discipline_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tb_announcement")
  }

}
