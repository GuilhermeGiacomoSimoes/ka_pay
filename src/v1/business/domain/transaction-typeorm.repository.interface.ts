import {TransactionResponse} from "src/v1/business/common/Transaction.response";

export interface ITransactionRepository {
	listTransactions() : Promise<TransactionResponse[]>; 
}
