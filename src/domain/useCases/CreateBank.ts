import {Bank} from "../entities/Bank";
import {BankRepositoryInterface} from "../interfaceAdapters/repository/BankRepositoryInterface";

export class CreateBank {
	private readonly repository: BankRepositoryInterface;
	constructor(repository: BankRepositoryInterface) {
		this.repository = repository;
	}

	async execute(bank: Bank) {
		const bankConsult = await this.repository.getBankById(bank.id);
		if(bankConsult) throw new Error("bank already exists");
		this.repository.save(bank);
	}
}
