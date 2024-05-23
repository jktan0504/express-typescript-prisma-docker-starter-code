import { IBaseInterface } from "../../../core/interfaces";

interface ICountry extends IBaseInterface {
	id?: bigint;
    name: string;
    code: string;
	timezone: string;
}

export { ICountry };
