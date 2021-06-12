import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('establishment')
export class Establishment {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  street: string;

  @Column('int')
  number: number;

  @Column({ length: 14 })
  cnpj: string;

  @Column({ length: 100 })
  city: string;

  @Column('int')
  IE: number;
}
