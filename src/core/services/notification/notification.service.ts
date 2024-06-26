import { injectable } from "inversify";
import { INotificationService } from "./notification.interface";

@injectable()
class NotificationService implements INotificationService {
	sendSms = async (to: string, message: string): Promise<void> => {
		throw new Error("Method not implemented.");
	}
	sendPushNotification = async (to: string, title: string, message: string): Promise<void> => {
		throw new Error("Method not implemented.");
	}
	sendOtp = async (to: string, message: string): Promise<void> => {
		try {
			const msg = 'sent'
		} catch (error) {
			throw error	
		}
	}
	sendMail = async (to: string, message: string): Promise<void> => {
		throw new Error("Method not implemented.");
	}
}

export { NotificationService }