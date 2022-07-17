import {CLientResponse} from "src/v1/business/common/client.response";
import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {TransactionTypeORMEntity} from "../../persistence/typeorm/transaction/entity/transaction-typeorm-entity";

export class TransactionTypeormAdapterRepository {

	listTransactionsAdapter(transactionRepositoryTypeorm : TransactionTypeORMEntity[]) : TransactionResponse[] {
		let transactionsResponse : TransactionResponse[];

		for(let transactionTypeorm of transactionRepositoryTypeorm) {
			let transactionResponse : TransactionResponse;

			let clientDestinationResponse : CLientResponse;
			let clientOriginResponse : CLientResponse;

			clientDestinationResponse.name = transactionTypeorm.clientDestination.name;
			clientDestinationResponse.email = transactionTypeorm.clientDestination.email;
			clientDestinationResponse.birthDate = transactionTypeorm.clientDestination.birthDate;
			clientDestinationResponse.cpfCnpj = transactionTypeorm.clientDestination.cpfCnpj;
			clientDestinationResponse.money = transactionTypeorm.clientDestination.money;

			clientOriginResponse.name = transactionTypeorm.clientOrigin.name;
			clientOriginResponse.email = transactionTypeorm.clientOrigin.email;
			clientOriginResponse.birthDate = transactionTypeorm.clientOrigin.birthDate;
			clientOriginResponse.cpfCnpj = transactionTypeorm.clientOrigin.cpfCnpj;
			clientOriginResponse.money = transactionTypeorm.clientOrigin.money;

			transactionResponse.clientDestination = clientDestinationResponse;
			transactionResponse.clientOrigin = clientOriginResponse;
			transactionResponse.valueTransaction = transactionTypeorm.valueTransaction;
			transactionsResponse.push(transactionResponse);	
		}

		return transactionsResponse;
	}
}
