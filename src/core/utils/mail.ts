import { IMailInterface } from '../interfaces/mail-interface';
import { mailTransporter } from '../../configs/smtp';

export const sendMail = async (option: IMailInterface): Promise<any> => {
    await mailTransporter
        .send({
            template: option.template,
            message: {
                to: option.to,
            },
            locals: {
                ...option.data,
            },
        })
        .then(console.log)
        .catch(console.error);
};
