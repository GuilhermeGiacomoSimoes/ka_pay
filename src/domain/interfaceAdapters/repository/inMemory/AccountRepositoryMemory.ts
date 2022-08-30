import {Account} from "../../../entities/Account";
import {AccountRepositoryInterface} from "../AccountRepositoryInterface";

export class AccountRepositoryMemory implements AccountRepositoryInterface {
	
	private accounts : Account[] = [];

	listAccounts(): Promise<Account[]> {
		return Promise.resolve(this.accounts);	
	}	

	getAccountById(uuid: string): Promise<Account | undefined> {
		const account : Account | undefined = 
			this.accounts.find((account) => {
				    return account.id == uuid;
			}); 
		return Promise.resolve(account);
	}

	save(account: Account) {
		this.accounts.push(account);
	}

	update(account: Account) {
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
