import {Account} from "../../../entities/Account";
import {AccountRepositoryInterface} from "../../interfaces/repository/AccountRepositoryInterface";

export class AccountRepositoryMemory implements AccountRepositoryInterface {
	
	private accounts : Account[] = [];

	async listAccounts(): Promise<Account[]> {
		return Promise.resolve(this.accounts);	
	}	

	async getAccountById(uuid: string): Promise<Account | undefined> {
		const account : Account | undefined = 
			this.accounts.find((account) => {
				    return account.id == uuid;
			}); 
		return Promise.resolve(account);
	}

	async save(account: Account) {
		this.accounts.push(account);
	}

	async update(account: Account) {
		const indexAccountUpdate = this.returnIndexOfAccountInArrayMemoryByUuid(account.id);
		if(indexAccountUpdate == -1) {
			return;
		}

		this.accounts.splice(indexAccountUpdate, 1);
		this.accounts.push(account); 
		return Promise.resolve(account);
	}

	private returnIndexOfAccountInArrayMemoryByUuid(uuid: string) : number {
		for(let index = 0; index < this.accounts.length; index++) {
			if(this.accounts[index].id == uuid) return index; 
		}

		return -1;	
	}
}
