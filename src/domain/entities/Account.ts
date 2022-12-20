export class Account {
	private _id: string;
	private _idClient: string;
	private _idBank: string;
	private _money: number;

	constructor(id: string, idClient: string, idBank: string, money: number) {
		this._id =  id;
 		this._idClient =  idClient;
 		this._idBank =  idBank;
		this._money = money;
	}

	public get id(): string {
		return this._id;
	}

	public get idClient(): string {
		return this._idClient;
	}

	public get idBank(): string {
		return this._idBank;
	}

	public get money() : number {
		return this._money;
	}
}
