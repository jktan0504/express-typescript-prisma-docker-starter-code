import { hash, compare } from 'bcrypt';
import { BinaryToTextEncoding, createHmac } from 'crypto';

export const hashBcrypt = async (data: string): Promise<string> => {
    return hash(data, 12);
};

export const compareBcrypt = async (
    data: string,
    hashedData: string,
): Promise<boolean> => {
    return compare(data, hashedData);
};

const algorithm = 'sha256';
const secret = process.env.HMAC_SECRET as string;

export const hashHmac = (
    data: string,
    digest: BinaryToTextEncoding = 'hex',
): string => {
    const hmac = createHmac(algorithm, secret);
    hmac.update(data);

    return hmac.digest(digest);
};
