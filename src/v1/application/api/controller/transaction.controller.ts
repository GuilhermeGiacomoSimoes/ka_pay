import {Controller, Get} from "@nestjs/common";

@Controller('transaction')
export default class TransactionController {

	@Get()
	async listTransations() : Promise<void> | never {
	}
}
