import { IAUthRegisterRequest, IAuthLoginRequest, IAuthRequestForgetPasswordRequest, IAuthRequestOTPRequest, IAuthVerifyForgetPasswordRequest, IAuthVerifyOTPRequest } from "./auth.interface";

// IAuthUseCase.ts
interface IAuthUseCase  {
	login(reqBody: IAuthLoginRequest): Promise<any>;
	register(reqBody: IAUthRegisterRequest): Promise<any>;
	requestForgetPassword(reqBody: IAuthRequestForgetPasswordRequest): Promise<any>;
	verifyForgetPassword(reqBody: IAuthVerifyForgetPasswordRequest): Promise<any>;
	requestOTP(reqBody: IAuthRequestOTPRequest): Promise<any>;
	verifyOTP(reqBody: IAuthVerifyOTPRequest): Promise<any>;
}

export { IAuthUseCase }
