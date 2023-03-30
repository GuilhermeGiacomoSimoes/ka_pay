import {Account} from "../entities/Account";
import { getAccountById } from "../entities/services/GetAccountById";
import { valueVerification } from "../entities/services/ValueVerification";
import {Transaction} from "../entities/Transaction";
import {AccountRepositoryInterface} from "../interfaceAdapters/interfaces/repository/AccountRepositoryInterface";
import {TransactionRepositoryInterface} from "../interfaceAdapters/interfaces/repository/TransactionRepositoryInterface";

export class CarryOutTransaction {
	private readonly transactionRepository: TransactionRepositoryInterface
	private readonly accountRepository: AccountRepositoryInterface

	constructor(
		transactionRepository: TransactionRepositoryInterface, 
		accountRepository: AccountRepositoryInterface
	) {
		this.transactionRepository =  transactionRepository;
		this.accountRepository =  accountRepository;
	}

	async execute(
		value: number, 
		accountOriginUUID: string, 
		accountDestinationUUID: string
	) {
		valueVerification(value);

		const accountOriginDatabase = await getAccountById(accountOriginUUID, this.accountRepository);
		const accountDestinationDatabase = await getAccountById(accountDestinationUUID, this.accountRepository);

		if(accountOriginDatabase.money - value < 0)
			throw new Error("Value is greater than the balance");

		const accountOrigin = new Account(
			accountOriginDatabase.id, 
			accountOriginDatabase.idClient, 
			accountOriginDatabase.idBank, 
			accountOriginDatabase.money - value
		);
		const accountDestination = new Account(
			accountDestinationDatabase.id, 
			accountDestinationDatabase.idClient, 
			accountDestinationDatabase.idBank, 
			accountDestinationDatabase.money + value
		);

		this.accountRepository.update(accountOrigin);
		this.accountRepository.update(accountDestination);

		const transaction: Transaction = new Transaction('', value, accountDestinationUUID, accountOriginUUID);
		this.transactionRepository.save(transaction);
	}
}
