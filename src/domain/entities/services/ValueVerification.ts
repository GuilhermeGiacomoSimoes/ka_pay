import { err } from "./error";

export async function valueVerification(value: number) : Promise<void> {
    if(value == null || value == undefined || isNaN(value)) err("Value is not a number");
	if(value < 0) err("Value is not valid");
}