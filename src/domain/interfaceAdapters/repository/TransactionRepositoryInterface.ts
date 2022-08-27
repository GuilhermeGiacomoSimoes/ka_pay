import {Transaction} from "../entities/Transaction";

export interface TransactionRepositoryInterface {
	listTransactions(): Promise<Transaction[]>;
	getTransactionById(uuid: string): Promise<Transaction>;
	save(transaction: Transaction): Transaction;
	update(transaction: Transaction): Transaction;
}
