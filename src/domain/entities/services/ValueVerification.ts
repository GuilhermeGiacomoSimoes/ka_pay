import { err } from "./error";

export function valueVerification(value: number) : void {
	if(value < 0) err("Value is not valid");
    if(value == null || value == undefined || isNaN(value)) err("Value is not a number");
}