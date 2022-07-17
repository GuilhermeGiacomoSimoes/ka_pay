import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {ClientTypeORMEntity} from "../../client/client-typeorm-entity";

@Entity('ka_transaction')
export class TransactionTypeORMEntity {
	@PrimaryColumn()
	id : string;

	@Column({ name : 'value_transaction' })
	valueTransaction : number;

	@Column({ name : 'client_destination' })
	@OneToOne(type => ClientTypeORMEntity) 
	@JoinColumn()
	clientDestination : ClientTypeORMEntity;

	@Column({ name : 'client_origin' }) 
	@OneToOne(type => ClientTypeORMEntity)
	@JoinColumn()
	clientOrigin : ClientTypeORMEntity;
}
