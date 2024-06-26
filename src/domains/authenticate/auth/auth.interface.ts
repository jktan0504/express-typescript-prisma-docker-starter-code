import { IFullUser } from "../../users"

// Login
interface IAuthLoginRequest {
    username: string,
	password: string
}

// Register
interface IAUthRegisterRequest extends IFullUser {}

// Request Forget Password
interface IAuthRequestForgetPasswordRequest {
    username: string
}

// Verify Forget Password Token
interface IAuthVerifyForgetPasswordRequest {
    username: string,
	token: string
}

// Request OTP
interface IAuthRequestOTPRequest {
    contact_number: string
}

// Verify OTP
interface IAuthVerifyOTPRequest {
    contact_number: string
	otp: string
}

export type { IAuthLoginRequest, IAUthRegisterRequest, IAuthRequestForgetPasswordRequest, IAuthVerifyForgetPasswordRequest, IAuthRequestOTPRequest, IAuthVerifyOTPRequest  }

