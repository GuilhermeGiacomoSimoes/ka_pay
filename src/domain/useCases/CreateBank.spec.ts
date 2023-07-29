import {Bank} from "../entities/Bank";
import {BankRepositoryMemory} from "../interfaceAdapters/adapters/inMemory/BankRepositoryMemory";
import {CreateBank} from "./CreateBank";

describe('useCase - createBank', () => {

	let createBank: CreateBank;
	beforeEach(() => {
		const repository = new BankRepositoryMemory();
		createBank = new CreateBank(repository);
	});

	test('create bank not throw', async () => {
		const client = new Bank('id', 'guilherme'); 
		expect(createBank.execute(client)).resolves.not.toThrow();
	});

	test('create duplicate bank throw', async () => {
		const bank = new Bank('id', 'guilherme'); 
		await createBank.execute(bank);
		expect(createBank.execute(bank)).rejects.toThrow();
	});
});
