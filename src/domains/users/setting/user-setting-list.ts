import { string } from "joi"

const UserSettingList: string[] = [
	'received_email_notification',
	'rceived_push_notification',
	'user_greeting_message',
	'user_greeting_message_interval'
]

export { UserSettingList }