import { IErrorResponse } from "../../interfaces";
import { BaseException } from "./base.exception";

class AuthException extends BaseException {
    constructor(err: IErrorResponse) {
        super(err);
        this.name = 'AuthException';
    }
}

export { AuthException };