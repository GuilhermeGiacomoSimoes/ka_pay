import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity('transaction')
export class TransactionTypeORMEntity {
	@PrimaryColumn()
	id : string;

	@Column({ name : 'value_transaction' })
	valueTransactio : number;

	@Column({ name : 'client_destination' })
	clientDestination : string;

	@Column({ name : 'client_origin' })
	clientOrigin : string;
}
