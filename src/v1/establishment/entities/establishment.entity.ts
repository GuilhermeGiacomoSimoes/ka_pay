import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Establishment {
  @PrimaryColumn()
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
