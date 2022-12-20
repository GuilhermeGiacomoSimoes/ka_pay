export class Transaction  {
	
	private readonly _id: string;
	private readonly _value: number;
	private readonly _idClientDestination: string;
	private readonly _idClientOrigin: string;

	constructor(id: string, value: number, idClientDestination: string, idClientOrigin: string) {
		this._id = id;
		this._value = value;
		this._idClientDestination = idClientDestination;
		this._idClientOrigin = idClientOrigin;
	}

	public get id () {
		return this._id;
	}
	public get value () {
		return this._value;
	}
	public get idClientDestination () {
		return this._idClientDestination;
	}
	public get idClientOrigin () {
		return this._idClientOrigin;
	}
}
