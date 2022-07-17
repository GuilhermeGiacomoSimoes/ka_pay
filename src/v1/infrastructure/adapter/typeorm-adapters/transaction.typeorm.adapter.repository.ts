import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {TransactionTypeORMEntity} from "../../persistence/typeorm/transaction/entity/transaction-typeorm-entity";

export class TransactionTypeormAdapterRepository {

	listTransactionsAdapter(transactionRepositoryTypeorm : TransactionTypeORMEntity[]) : TransactionResponse[] {
		let transactionsResponse : TransactionResponse[];
		for(let transactionTypeorm : TransactionTypeORMEntity of transactionRepositoryTypeorm) {
			const transactionResponse : TransactionResponse;
			transactionResponse.clientDestination = transactionTypeorm.clientDestination;
			transactionResponse.clientOrigin = transactionTypeorm.clientOrigin;
			transactionResponse.valueTransation = transactionTypeorm.valueTransation;

			transactionsResponse.push(transactionResponse);	
		}	
	}
}
