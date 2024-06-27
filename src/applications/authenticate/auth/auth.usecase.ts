// AuthUseCase.ts

import { injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IAUthRegisterRequest, IAuthLoginRequest, IAuthRequestForgetPasswordRequest, IAuthRequestOTPRequest, IAuthUseCase, IAuthVerifyForgetPasswordRequest, IAuthVerifyOTPRequest, IUserLoginToken, IUserLoginTokenUseCase, IVerifyOTP, IVerifyOTPUseCase } from "../../../domains/authenticate";
import { container } from "../../../core/locators/dependencies-injector";
import { IUser, IUserDetailUseCase, IUserUseCase } from "../../../domains/users";
import { compareBcrypt } from "../../../core/utils/hashing";
import { generateJwtToken } from "../../../core/utils/jwt";
import { IErrorResponse } from "../../../core/interfaces";
import { AuthException } from "../../../core/domain/exceptions/auth.exception";
import { INotificationService } from "../../../core/services/notification";
import { generateRandomNumber } from "../../../core/utils/generator";

@injectable()
class AuthUseCase implements IAuthUseCase {

	login = async (reqBody: IAuthLoginRequest): Promise<any> => {
		try {
			// User UseCase
			const userUseCase = container.get<IUserUseCase>(
				INTERCEPTOR_TOKENS_TYPES.USER_USECASE,
			);

			// User Detail UseCase
			const userDetailUseCase = container.get<IUserDetailUseCase>(
				INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_USECASE,
			);

			// User Login Token UseCase
			const userLoginTokenUserCase = container.get<IUserLoginTokenUseCase>(
				INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_USECASE,
			);

			let isLoginSuccess: boolean = false
			let userData = null
			let returnUserObj = null

			//  Login with Email
			let res = await userDetailUseCase.getBy({
				email: reqBody.username
			});

			if (res && res.data && res.data.length > 0) {

				const userRes = await userUseCase.getByID(res.data[0].id!, {
					include: { user_details: true, role: true }
				})
				userData = userRes && userRes
				const { password, ...filteredUserData } = userData
				if (userData && (await compareBcrypt(reqBody.password, password as string))) {
					isLoginSuccess = true
					returnUserObj = filteredUserData
				}
			} else {
				// Login with Username
				const res = await userUseCase.getBy({ username: reqBody.username, include: { user_details: true, role: true } })
		
				if (res && res.data && res.data.length > 0) {
					userData = res && res.data && res.data[0]
					const { password, ...filteredUserData } = userData
		
					if (userData && (await compareBcrypt(reqBody.password, password as string))) {
						isLoginSuccess = true
						returnUserObj = filteredUserData
					}
				}
			}

			if (isLoginSuccess && userData && returnUserObj) {
				const updatedUser = await userUseCase.updateByID(userData && userData.id!, {
					last_login_at: new Date(),
					updated_at: new Date(),
				})
				returnUserObj.last_login_at = updatedUser.last_login_at
				
				// Generate JWT
				const jwtToken = await generateJwtToken({
					user: returnUserObj as IUser,
				})
				
				// Generate Login Token
				const userLoginTokenParams: IUserLoginToken = {
					user_id: returnUserObj && returnUserObj.id!,
					access_token: jwtToken.access_token,
					refresh_token: jwtToken.refresh_token,
				}
				
				await userLoginTokenUserCase.createOrUpdate(userLoginTokenParams)

				return jwtToken
			}
			
			const errExp: IErrorResponse = {
				statusCode: 401,
				errorCode: 'INVALID_CREDENTIALS',
				message: 'invalid combination of username & password',
			} 
			throw new AuthException(errExp);

		} catch (error) {
			// Logger.error(`auth login: ${error}`);
			throw error
		}
	}
	
	register(reqBody: IAUthRegisterRequest): Promise<any> {
		throw new Error("Method not implemented.");
	}
	requestForgetPassword(reqBody: IAuthRequestForgetPasswordRequest): Promise<any> {
		throw new Error("Method not implemented.");
	}
	verifyForgetPassword(reqBody: IAuthVerifyForgetPasswordRequest): Promise<any> {
		throw new Error("Method not implemented.");
	}
	requestOTP = async (reqBody: IAuthRequestOTPRequest): Promise<any> => {
		try {
			// OTP UseCase
			const authOtpUseCase = container.get<IVerifyOTPUseCase>(
				INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_USECASE,
			);

			// User Detail UseCase
			const userDetailUseCase = container.get<IUserDetailUseCase>(
				INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_USECASE,
			);

			// Notification Service
			const notificationService = container.get<INotificationService>(
				INTERCEPTOR_TOKENS_TYPES.NOTIFICATION_SERVICE,
			);

			// Check is user exist
			const userDetails = await userDetailUseCase.getBy({
				contact_number: reqBody.contact_number
			})

			if (!userDetails || !userDetails.data || userDetails.data.length < 1) {
				throw new Error('user not found')
			}

			const hasRecord = await authOtpUseCase.getBy({
				contact_number: reqBody.contact_number
			})

			const newOTP = await generateRandomNumber(6)

			let res = null

			if (hasRecord && hasRecord.data && hasRecord.data.length > 0) {
				res = await authOtpUseCase.updateByID(hasRecord.data[0].id!, {
					otp: newOTP,
					updated_at: new Date()
				})
			} else {
				
				res = await authOtpUseCase.create({
					otp: newOTP,
					contact_number: reqBody.contact_number,
					created_at: new Date(),
					updated_at: new Date(),
				})
			}

			if (res) {
				const msg = `Your agent verification code is *${newOTP}* .`
				await notificationService.sendOtp(`60${reqBody.contact_number}`, msg);
			}

			return `request otp successfully`

		} catch (error) {
			throw error
		}
	}

	verifyOTP = async (reqBody: IAuthVerifyOTPRequest): Promise<any> => {
		try {

			// User UseCase
			const userUseCase = container.get<IUserUseCase>(
				INTERCEPTOR_TOKENS_TYPES.USER_USECASE,
			);

			// User Detail UseCase
			const userDetailUseCase = container.get<IUserDetailUseCase>(
				INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_USECASE,
			);

			// OTP UseCase
			const authOtpUseCase = container.get<IVerifyOTPUseCase>(
				INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_USECASE,
			);

			const verifyOtpRecords = await authOtpUseCase.getBy(reqBody)

			if (verifyOtpRecords && verifyOtpRecords.data && verifyOtpRecords.data.length > 0) {
				// Assuming verifyOtpRecords.data[0].created_at is a valid timestamp
				const createdTimestamp = new Date(verifyOtpRecords.data[0].updated_at!);
				const currentTime = new Date();

				// Calculate the time difference in milliseconds
				const timeDifference = currentTime.getTime() - createdTimestamp.getTime();

				// Convert milliseconds to minutes
				const minutesPassed = timeDifference / (1000 * 60);
				
				if (minutesPassed > 1) {
					throw new Error('verification code is expired. Please request again')
				}

				if (verifyOtpRecords.data[0].otp != reqBody.otp) {
					throw new Error('incorrect verification code')
				} 
			} else {
				throw new Error('invalid verification code')
			}

			const userDetails = await userDetailUseCase.getBy({
				contact_number: reqBody.contact_number
			})

			if (!userDetails || !userDetails.data || userDetails.data.length < 1) {
				throw new Error('user not found')
			}

			// update user data
			const currentUser = await userUseCase.getByID(userDetails && userDetails.data && userDetails.data[0].id!, {})

			if (!currentUser) {
				throw new Error('user not found')
			}

			const updatedUser = await userUseCase.updateByID(currentUser && currentUser.id!, {
				is_phone_verified: true
			})

			return updatedUser

		} catch (error) {
			throw error
		}
	}

    
}

export { AuthUseCase } 
