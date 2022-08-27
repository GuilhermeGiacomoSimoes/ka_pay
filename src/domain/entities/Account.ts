export class Account {
	private _id: string;
	private _idClient: string;
	private _idBank: string;

	constructor(id: string, idClient: string, idBank: string) {
		this._id =  id;
 		this._idClient =  idClient;
 		this._idBank =  idBank;
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
}
