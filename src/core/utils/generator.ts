import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid/async';

export const genId = () => uuidv4();

export const generateRandomId = async (): Promise<string> => {
    return await nanoid(51);
};

export const generateRandomBase64Token = async(): Promise<string> => {
	const randomId = await generateRandomId()
	const base64Token = Buffer.from(randomId, 'utf-8').toString(
		'base64url',
	);
	return base64Token
}

export function generateRandomCode(length: number = 6): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
}

export function generateRandomNumber(length: number = 6): string {
    const characters = '0123456789';
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }

    return result;
}