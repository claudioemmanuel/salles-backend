import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateAddressesTable1699572529064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const table = await queryRunner.getTable('addresses');

        if (table) {
            return;
        }

        await queryRunner.query(`
            CREATE TABLE "addresses" (
                "id" SERIAL NOT NULL,
                "street" character varying NOT NULL,
                "number" character varying NOT NULL,
                "complement" character varying,
                "zip_code" character varying NOT NULL,
                "city" character varying NOT NULL,
                "state" character varying NOT NULL,
                "country" character varying NOT NULL,
                "user_id" integer,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id")
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "addresses"
        `)
    }

}
