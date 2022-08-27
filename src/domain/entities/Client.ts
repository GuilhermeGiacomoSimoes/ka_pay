export class Client {
	private _id: string;
	private _name: string;
	private _birthDate: string;
	private _cpfCnpj: string;

	constructor(id: string, name: string, birthDate: string, cpfCnpj: string) {
		this._id = id;
		this._name = name;
		this._birthDate = birthDate;
		this._cpfCnpj = cpfCnpj;
	}

	public get id() : string{
		return this._id; 
		
	}
	public get name() : string {
		return this._name;
		
	}
	public get birthDate() : string {
		return this._birthDate;
		
	}
	public get cpfCnpj() : string {
		return this._cpfCnpj;
		
	}
}
