import {Bank} from "../../../entities/Bank";
import {BankRepositoryInterface} from "../../interfaces/repository/BankRepositoryInterface";

export class BankRepositoryMemory implements BankRepositoryInterface {
	
	private banks : Bank[] = [];

	async getAll(): Promise<Bank[]> {
		return Promise.resolve(this.banks);	
	}


	async getBankById(uuid: string): Promise<Bank | undefined> {
		const bank : Bank | undefined = 
			this.banks.find((transactiom) => {
				    return transactiom.id == uuid;
			}); 
		return Promise.resolve(bank);
	}

	async save(bank: Bank) : Promise<Bank | undefined>{
		this.banks.push(bank);
		return Promise.resolve(bank);
	}

	update(bank: Bank) : Promise<Bank | undefined> {
		const indexBankUpdate = this.returnIndexOfBankInArrayMemoryByUuid(bank.id);
		if(indexBankUpdate == -1) {
			return Promise.resolve(undefined);
		}

		this.banks.splice(indexBankUpdate, 1);
		this.banks.push(bank); 
		return Promise.resolve(bank);
	}

	private returnIndexOfBankInArrayMemoryByUuid(uuid: string) : number {
		for(let index = 0; index < this.banks.length; index++) {
			if(this.banks[index].id == uuid) return index; 
		}

		return -1;	
	}
}
