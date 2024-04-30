import * as dotenv from 'dotenv';

dotenv.config({});

const paymentConfig = {
    billplz: {
        url: process.env.BILLPLZ_URL,
        collection: process.env.BILLPLZ_COLLECTION_CODE,
        secret: process.env.BILLPLZ_SECRET_KEY,
        webhook: process.env.BILLPLZ_CALLBACK_URL,
    },
    chip: {
        url: process.env.CHIP_URL || '',
        merchant: process.env.CHIP_MERCHANT_ID || '',
        secret: process.env.CHIP_SECRET_KEY || '',
        successUrl: process.env.CHIP_SUCCESS_URL || '',
        cancelUrl: process.env.CHIP_CANCEL_URL || '',
        webhook: process.env.CHIP_CALLBACK_URL || '',
    },
    stripe: {
        my: {
            secret: process.env.STRIPE_MY_SECRET_KEY || '',
            successUrl: process.env.STRIPE_MY_SUCCESS_URL || '',
            cancelUrl: process.env.STRIPE_MY_CANCEL_URL || '',
        },
        sg: {
            secret: process.env.STRIPE_SG_SECRET_KEY || '',
            successUrl: process.env.STRIPE_SG_SUCCESS_URL || '',
            cancelUrl: process.env.STRIPE_SG_CANCEL_URL || '',
        },
    },
    senangpay: {
        url: process.env.SENANGPAY_URL,
        merchant: process.env.SENANGPAY_MERCHANT_ID,
        secret: process.env.SENANGPAY_SECRET_KEY,
    },
    airwallex: {
        url: process.env.AIRWALLEX_URL,
        secret: process.env.AIRWALLEX_SECRET,
        clientId: process.env.AIRWALLEX_CLIENT_ID,
    },
    payex: {
        url: process.env.PAYEX_URL,
        email: process.env.PAYEX_EMAIL,
        secret: process.env.PAYEX_SECRET,
    },
};

export default paymentConfig;
