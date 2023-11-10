import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUsersTable1699495928238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const table = await queryRunner.getTable('users');

        if (table) {
            return;
        }

        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "password" character varying NOT NULL,
                "email" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id")
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "users"
        `)
    }

}
