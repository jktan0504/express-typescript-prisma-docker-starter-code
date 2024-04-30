import * as dotenv from 'dotenv';
import * as path from 'path';
import EmailTemplates from 'email-templates';

dotenv.config({});

export const mailTransporter = new EmailTemplates({
    preview: false,
    send: true,
    views: {
        root: path.join(__dirname, '..', 'modules', 'common', 'emails'),
    },
    message: {
        from: process.env.SMTP_SENDER,
    },
    transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
        logger: true,
    },
});
