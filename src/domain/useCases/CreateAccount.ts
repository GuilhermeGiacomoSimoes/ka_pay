import {Account} from "../entities/Account";
import {AccountRepositoryInterface} from "../interfaceAdapters/repository/AccountRepositoryInterface";

export class CreateAccount {
	private readonly repository: AccountRepositoryInterface;
	constructor(repository: AccountRepositoryInterface) {
		this.repository = repository;
	}

	async execute(account: Account) {
		const accountConsult = await this.repository.getAccountById(account.id);
		if(accountConsult) throw new Error('account consult already exist');
		this.repository.save(account);
	}
}
