import {Bank} from "../../entities/Bank";

export interface BankRepositoryInterface {
	save(bank: Bank) : Promise<Bank | undefined>;
	update(bank: Bank) : Promise<Bank | undefined>;
	getBankById(uuid: string) : Promise<Bank | undefined>;
	getAll(): Promise<Bank[]>;
}
