interface INotificationService {
    sendSms(to: string, message: string): Promise<void>;
	sendPushNotification(to: string, title: string, message: string): Promise<void>;
	sendOtp(to: string, message: string): Promise<void>;
	sendMail(to: string, message: string): Promise<void>;  
}

export type { INotificationService }