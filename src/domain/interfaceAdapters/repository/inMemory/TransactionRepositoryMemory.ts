import {Transaction} from "../../../entities/Transaction";
import {TransactionRepositoryInterface} from "../TransactionRepositoryInterface";

export class TransactionRepositoryMemory implements TransactionRepositoryInterface {

	private transactions : Transaction[] = [];

	listTransactions(): Promise<Transaction[]> {
		return Promise.resolve(this.transactions);
	}

	getTransactionById(uuid: string): Promise<Transaction | undefined> {
		const transaction : Transaction | undefined = 
			this.transactions.find((transaction) => {
				    return transaction.id == uuid;
			}); 

		return Promise.resolve(transaction);
	}

	save(transaction: Transaction) {
		this.transactions.push(transaction);
	}

	update(transaction: Transaction) {
		const indexTransactionUpdate = this.returnIndexOfTransactionInArrayMemoryByUuid(transaction.id);
		if(indexTransactionUpdate == -1) {
			return;
		}

		this.transactions.splice(indexTransactionUpdate, 1);
		this.transactions.push(transaction); 
		return Promise.resolve(transaction);
	}

	private returnIndexOfTransactionInArrayMemoryByUuid(uuid: string) : number {
		for(let index = 0; index < this.transactions.length; index++) {
			if(this.transactions[index].id == uuid) return index; 
		}

		return -1;	
	}
}
