import {Transaction} from "../../../entities/Transaction";

export interface TransactionRepositoryInterface {
	listTransactions(): Promise<Transaction[]>;
	getTransactionById(uuid: string): Promise<Transaction | undefined>;
	save(transaction: Transaction): any;
	update(transaction: Transaction): any;
}
