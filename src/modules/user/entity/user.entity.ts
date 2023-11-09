import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'America/Sao_Paulo' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'America/Sao_Paulo' })
  updated_at: Date;
}