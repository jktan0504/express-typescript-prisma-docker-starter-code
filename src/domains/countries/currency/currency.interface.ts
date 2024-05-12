import { IBaseInterface } from "../../../core/interfaces";

interface ICurrency extends IBaseInterface {
	id?: bigint;
    name: string;
    code: string;
	symbol: string;
}

export { ICurrency };
