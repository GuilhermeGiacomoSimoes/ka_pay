import {Bank} from "../../entities/Bank";

export interface BankRepositoryInterface {
	save(bank: Bank) : Promise<Bank>;
	update(bank: Bank) : Promise<Bank>;
	getBankById(uuid: string) : Promise<Bank>;
	getAll(): Promise<Bank[]>;
}
