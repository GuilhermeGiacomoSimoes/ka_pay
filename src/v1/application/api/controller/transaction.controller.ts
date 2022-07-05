import {Controller, Get} from "@nestjs/common";

@Controller('transaction')
export default class TransactionController {

	@Get()
	listTransations() : Promise<void> | never{

	}
}
