/**
 * src/core/di/dependcies-injector.ts
 *
 * Dependencies Injection uses Inversity
 * Interacts with Repositories & Usecases layers
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 22 June 2024
 */
import { Container } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../types/interceptors.types";
import { PrismaClient } from "@prisma/client";
import db from "../../infrastructures/databases/models/prisma.model";
import { HealthCheckUsecase } from "../../applications/healthcheck";
import { HealthCheckController } from "../../presentations/rest/controllers/healthcheck/healthcheck.controller";
import { ICountryRepository, ICountryUseCase, ICurrencyRepository, ICurrencyUseCase } from "../../domains/countries";
import { CountryRepository, CurrencyRepository } from "../../infrastructures/repositories/countries";
import { CountryUseCase, CurrencyUseCase } from "../../applications/countries";
import { CountryController, CurrencyController } from "../../presentations/rest/controllers/countries";
import { IFileUploadUseCase, IMediaFileRepository, IMediaFileUseCase, IMediaRepository, IMediaUseCase } from "../../domains/medias";
import { MediaFileRepository, MediaRepository } from "../../infrastructures/repositories/medias";
import { FileUploadUseCase, MediaFileUseCase, MediaUseCase } from "../../applications/medias";
import { MediaController, MediaFileController } from "../../presentations/rest/controllers/medias";
import { ICompanyCategoryRepository, ICompanyCategoryUseCase, ICompanyRepository, ICompanyUseCase, IMerchantRepository, IMerchantUseCase } from "../../domains/companies";
import { CompanyCategoryRepository, CompanyRepository, MerchantRepository } from "../../infrastructures/repositories/companies";
import { CompanyCategoryUseCase, CompanyUseCase, MerchantUseCase } from "../../applications/companies";
import { CompanyCategoryController, CompanyController } from "../../presentations/rest/controllers/companies";
import { IPermissionRepository, IPermissionUseCase, IRBACRepository, IRBACUseCase, IRoleRepository, IRoleUseCase } from "../../domains/roles";
import { PermissionRepository, RBACRepository, RoleRepository } from "../../infrastructures/repositories/roles";
import { PermissionUseCase, RBACUseCase, RoleUseCase } from "../../applications/roles";
import { PermissionController, RBACController, RoleController } from "../../presentations/rest/controllers/roles";
import { IPasswordResetTokenRepository, IPasswordResetTokenUseCase, ISSOProviderRepository, ISSOProviderUseCase, IUserLoginTokenRepository, IUserLoginTokenUseCase, IVerifyOTPRepository, IVerifyOTPUseCase } from "../../domains/authenticate";
import { PasswordResetTokenRepository, SSOProviderRepository, UserLoginTokenRepository, VerifyOTPRepository } from "../../infrastructures/repositories/authenticate";
import { AuthUseCase, PasswordResetTokenUseCase, SSOProviderUseCase, UserLoginTokenUseCase, VerifyOTPUseCase } from "../../applications/authenticate";
import { AuthController, PasswordResetTokenController, SSOProviderController, UserLoginTokenController, VerifyOTPController } from "../../presentations/rest/controllers/authenticate";
import { IReferralCodeRepository, IReferralCodeUseCase, IUserDetailRepository, IUserDetailUseCase, IUserRepository, IUserSettingRepository, IUserSettingUseCase, IUserUseCase } from "../../domains/users";
import { ReferralCodeRepository, UserDetailRepository, UserRepository, UserSettingRepository } from "../../infrastructures/repositories/users";
import { ReferralCodeUseCase, UserDetailUseCase, UserSettingUseCase, UserUseCase } from "../../applications/users";
import { ReferralCodeController, UserController, UserDetailController, UserSettingController } from "../../presentations/rest/controllers/users";
import { INotificationService, NotificationService } from "../services/notification";
import { FileUploadController } from "../../presentations/rest/controllers/medias/file-upload/file-upload.controller";
import { MerchantController } from "../../presentations/rest/controllers/companies/merchant/merchant.controller";

/**
 * Initial Container
 */
const container = new Container();

/**
 * Prisma Client
 */
container.bind<PrismaClient>(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB).toConstantValue(db);

/**
 * Bind for All Repositories & UseCases & Controllers
 */
// Healthcheck Usecase
container.bind(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_USECASE).to(HealthCheckUsecase);
container.bind(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_CONTROLLER).to(HealthCheckController);

/// MEDIAS
// Media
container.bind<IMediaRepository>(INTERCEPTOR_TOKENS_TYPES.MEDIA_REPO).to(MediaRepository)
container.bind<IMediaUseCase>(INTERCEPTOR_TOKENS_TYPES.MEDIA_USECASE).to(MediaUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.MEDIA_CONTROLLER).to(MediaController);
// Media File
container.bind<IMediaFileRepository>(INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_REPO).to(MediaFileRepository)
container.bind<IMediaFileUseCase>(INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_USECASE).to(MediaFileUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_CONTROLLER).to(MediaFileController);
container.bind<IFileUploadUseCase>(INTERCEPTOR_TOKENS_TYPES.FILE_UPLOAD_USECASE).to(FileUploadUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.FILE_UPLOAD_CONTROLLER).to(FileUploadController)

/// COUNTRIES
// Currency
container.bind<ICurrencyRepository>(INTERCEPTOR_TOKENS_TYPES.CURRENCY_REPO).to(CurrencyRepository)
container.bind<ICurrencyUseCase>(INTERCEPTOR_TOKENS_TYPES.CURRENCY_USECASE).to(CurrencyUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.CURRENCY_CONTROLLER).to(CurrencyController);
// Country
container.bind<ICountryRepository>(INTERCEPTOR_TOKENS_TYPES.COUNTRY_REPO).to(CountryRepository)
container.bind<ICountryUseCase>(INTERCEPTOR_TOKENS_TYPES.COUNTRY_USECASE).to(CountryUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.COUNTRY_CONTROLLER).to(CountryController);

/// COMPANIES
// Company Category
container.bind<ICompanyCategoryRepository>(INTERCEPTOR_TOKENS_TYPES.COMPANY_CATEGORY_REPO).to(CompanyCategoryRepository)
container.bind<ICompanyCategoryUseCase>(INTERCEPTOR_TOKENS_TYPES.COMPANY_CATEGORY_USECASE).to(CompanyCategoryUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.COMPANY_CATEGORY_CONTROLLER).to(CompanyCategoryController);
// Company
container.bind<ICompanyRepository>(INTERCEPTOR_TOKENS_TYPES.COMPANY_REPO).to(CompanyRepository)
container.bind<ICompanyUseCase>(INTERCEPTOR_TOKENS_TYPES.COMPANY_USECASE).to(CompanyUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.COMPANY_CONTROLLER).to(CompanyController);
// Merchant
container.bind<IMerchantRepository>(INTERCEPTOR_TOKENS_TYPES.MERCHANT_REPO).to(MerchantRepository)
container.bind<IMerchantUseCase>(INTERCEPTOR_TOKENS_TYPES.MERCHANT_USECASE).to(MerchantUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.MERCHANT_CONTROLLER).to(MerchantController);

/// RBAC
// Role
container.bind<IRoleRepository>(INTERCEPTOR_TOKENS_TYPES.ROLE_REPO).to(RoleRepository)
container.bind<IRoleUseCase>(INTERCEPTOR_TOKENS_TYPES.ROLE_USECASE).to(RoleUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.ROLE_CONTROLLER).to(RoleController);
// Permission
container.bind<IPermissionRepository>(INTERCEPTOR_TOKENS_TYPES.PERMISSION_REPO).to(PermissionRepository)
container.bind<IPermissionUseCase>(INTERCEPTOR_TOKENS_TYPES.PERMISSION_USECASE).to(PermissionUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.PERMISSION_CONTROLLER).to(PermissionController);
// RBAC
container.bind<IRBACRepository>(INTERCEPTOR_TOKENS_TYPES.RBAC_REPO).to(RBACRepository)
container.bind<IRBACUseCase>(INTERCEPTOR_TOKENS_TYPES.RBAC_USECASE).to(RBACUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.RBAC_CONTROLLER).to(RBACController);

/// AUTH
// Auth Usecase
container.bind(INTERCEPTOR_TOKENS_TYPES.AUTH_USECASE).to(AuthUseCase);
container.bind(INTERCEPTOR_TOKENS_TYPES.AUTH_CONTROLLER).to(AuthController);
// sso provider
container.bind<ISSOProviderRepository>(INTERCEPTOR_TOKENS_TYPES.AUTH_SSO_PROVIDER_REPO).to(SSOProviderRepository)
container.bind<ISSOProviderUseCase>(INTERCEPTOR_TOKENS_TYPES.AUTH_SSO_PROVIDER_USECASE).to(SSOProviderUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.AUTH_SSO_PROVIDER_CONTROLLER).to(SSOProviderController);
// user login token
container.bind<IUserLoginTokenRepository>(INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_REPO).to(UserLoginTokenRepository)
container.bind<IUserLoginTokenUseCase>(INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_USECASE).to(UserLoginTokenUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_CONTROLLER).to(UserLoginTokenController);
// user forget password token
container.bind<IPasswordResetTokenRepository>(INTERCEPTOR_TOKENS_TYPES.AUTH_FORGET_PASSWORD_REPO).to(PasswordResetTokenRepository)
container.bind<IPasswordResetTokenUseCase>(INTERCEPTOR_TOKENS_TYPES.AUTH_FORGET_PASSWORD_USECASE).to(PasswordResetTokenUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.AUTH_FORGET_PASSWORD_CONTROLLER).to(PasswordResetTokenController);
// user verify otp
container.bind<IVerifyOTPRepository>(INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_REPO).to(VerifyOTPRepository)
container.bind<IVerifyOTPUseCase>(INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_USECASE).to(VerifyOTPUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_CONTROLLER).to(VerifyOTPController);

/// USER
// referral code
container.bind<IReferralCodeRepository>(INTERCEPTOR_TOKENS_TYPES.USER_REFERRAL_CODE_REPO).to(ReferralCodeRepository)
container.bind<IReferralCodeUseCase>(INTERCEPTOR_TOKENS_TYPES.USER_REFERRAL_CODE_USECASE).to(ReferralCodeUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.USER_REFERRAL_CODE_CONTROLLER).to(ReferralCodeController);
// user setting
container.bind<IUserSettingRepository>(INTERCEPTOR_TOKENS_TYPES.USER_SETTING_REPO).to(UserSettingRepository)
container.bind<IUserSettingUseCase>(INTERCEPTOR_TOKENS_TYPES.USER_SETTING_USECASE).to(UserSettingUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.USER_SETTING_CONTROLLER).to(UserSettingController);
// user detail
container.bind<IUserDetailRepository>(INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_REPO).to(UserDetailRepository)
container.bind<IUserDetailUseCase>(INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_USECASE).to(UserDetailUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_CONTROLLER).to(UserDetailController);
// user detail
container.bind<IUserRepository>(INTERCEPTOR_TOKENS_TYPES.USER_REPO).to(UserRepository)
container.bind<IUserUseCase>(INTERCEPTOR_TOKENS_TYPES.USER_USECASE).to(UserUseCase)
container.bind(INTERCEPTOR_TOKENS_TYPES.USER_CONTROLLER).to(UserController);

// NOTIFICATION
// notification service
container.bind<INotificationService>(INTERCEPTOR_TOKENS_TYPES.NOTIFICATION_SERVICE).to(NotificationService)

export { container };