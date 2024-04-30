import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({});

const formConfig = {
    gooogleForm: {
        scope: process.env.FORM_GOOGLE_SCOPE as string,
        credentials: path.join(
            __dirname,
            process.env.FORM_GOOGLE_CREDENTIALS as string,
        ),
    },
};

export default formConfig;
