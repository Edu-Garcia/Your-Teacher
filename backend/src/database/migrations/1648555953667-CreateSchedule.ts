import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSchedule1648555953667 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tb_schedule",
        columns: [
          {
            name: "schedule_id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "start",
            type: "timestamp",
          },
          {
            name: "end",
            type: "timestamp",
          },
          {
            name: "announcement_id",
            type: "uuid"
          },
        ],
        foreignKeys: [
          {
            name: "fk_schedule_announcement",
            columnNames: ["announcement_id"],
            referencedTableName: "tb_announcement",
            referencedColumnNames: ["announcement_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tb_schedule");
  }

}
