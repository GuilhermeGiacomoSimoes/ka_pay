import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity('ka_clients')
export class ClientTypeORMEntity {
	@PrimaryColumn()	
	id: string;

	@Column({name: 'name'})
	name: string;

	@Column({name : 'email'})
	email: string;

	@Column({name: 'birth_date'})
	birthDate : string;

	@Column({name : 'cpf_cnpj'})
	cpfCnpj: string;

	@Column({name: 'money'})
	money: number;
}
