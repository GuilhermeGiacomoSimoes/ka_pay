import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {ClientTypeORMEntity} from "../../client/client-typeorm-entity";

@Entity('ka_transactions')
export class TransactionTypeORMEntity {
	@PrimaryColumn()
	id : string;

	@Column({ name : 'value_transaction' })
	valueTransaction : number;

	@Column({ name : 'id_client_destination' , type: 'varchar'})
	@OneToOne(()  => ClientTypeORMEntity) 
	@JoinColumn()
	clientDestination : ClientTypeORMEntity;

	@Column({ name : 'id_client_origin' , type: 'varchar'}) 
	@OneToOne(()  => ClientTypeORMEntity)
	@JoinColumn()
	clientOrigin : ClientTypeORMEntity;
}
