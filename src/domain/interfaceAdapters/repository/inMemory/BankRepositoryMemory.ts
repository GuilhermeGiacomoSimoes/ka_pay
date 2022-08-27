import {Bank} from "../../../entities/Bank";

export class BankRepositoryMemory {
	
	private banks : Bank[] = [];

	listBanks(): Promise<Bank[]> {
		return Promise.resolve(this.banks);	
	}	

	getBankById(uuid: string): Promise<Bank | undefined> {
		const bank : Bank | undefined = 
			this.banks.find((transactiom) => {
				    return transactiom.id == uuid;
			}); 
		return Promise.resolve(bank);
	}

	save(bank: Bank) {
		this.banks.push(bank);
	}

	update(bank: Bank) {
		const indexBankUpdate = this.returnIndexOfBankInArrayMemoryByUuid(bank.id);
		if(indexBankUpdate == -1) {
			return;
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
