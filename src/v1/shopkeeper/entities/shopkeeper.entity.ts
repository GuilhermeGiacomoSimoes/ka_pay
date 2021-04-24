import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class ShopKeeper {
  @PrimaryColumn()
  uuid: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  document: string;

  @Column()
  token: string;

  @Column()
  phone: string;

  @Column()
  account_type: number;
}
