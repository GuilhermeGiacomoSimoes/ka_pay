import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ length: 100 })
  name: string;

  @Column('int')
  birthDate: number;

  @Column({ length: 14 })
  cpfCnpj: string;

  @Column({ length: 70 })
  addressStreet: string;

  @Column('int')
  addressNumber: number;

  @Column({ length: 50 })
  addressNeighborhood: string;

  @Column({ length: 50 })
  addressCity: string;

  @Column('bit')
  fraudster: boolean;

  @Column({ length: 2 })
  addressState: string;
}
