import { ObjectIdentifierList } from 'aws-sdk/clients/s3';
import { S3Client } from '../configs/aws-s3';
import {
    IGetS3Object,
    IPapaParseResponse,
    IUploadS3Object,
    IGetS3SignedUrl,
} from '../interfaces';
import * as papaparse from 'papaparse';
import { IFileUploadUrlResponse } from '../../domains/medias/file-upload';


export const generateSecureUrl = async ({ Bucket, Key }: IGetS3Object): Promise<IFileUploadUrlResponse> => {
    try {
		// url: https://staging-ezchat-assets-buckets.s3.ap-southeast-1.amazonaws.com/test/file/test1.png
        return {
            uploadUrl: await S3Client.getSignedUrlPromise('putObject', {
                Bucket,
                Key,
				ACL: 'public-read'
            }),
            error: null,
        };
    } catch (error) {
        return {
            uploadUrl: null,
            error: `Services:S3:generateSecureUrl:${error as unknown as string}`,
        };
    }
};

export const getS3Object = async ({ Bucket, Key }: IGetS3Object) => {
    try {
        const { Body: content } = await S3Client.getObject({
            Bucket,
            Key,
        }).promise();
        if (!content) throw new Error(`Services:S3:getObject:InvalidKey`);
        return (await papaparse.parse(content.toString(), {
            header: true,
            dynamicTyping: true,
        })) as IPapaParseResponse;
    } catch (error) {
        console.log({ error });
        throw new Error(`Services:S3:getObject`);
    }
};

export const uploadS3Object = async ({
    Bucket,
    Key,
    Buffer,
}: IUploadS3Object) => {
    try {
        return S3Client.upload({
            Key,
            Body: Buffer,
            Bucket,
        }).promise();
    } catch (error) {
        console.error('[uploadS3Object] failed to upload', error);

        throw new Error('Unable to upload');
    }
};

export const getObjectSignedUrl = async ({
    Bucket,
    Key,
    Expires,
}: IGetS3SignedUrl) => {
    try {
        const url = await S3Client.getSignedUrl('getObject', {
            Bucket,
            Key,
            ...(Expires && { Expires }),
        });

        return url;
    } catch (error) {
        console.error('[getObjectSignedUrl] failed to generate', error);

        throw new Error('Unable to generate a signed url');
    }
};

export const purgeFolder = async ({
    Bucket,
    Prefix,
}: {
    Bucket: string;
    Prefix: string;
}) => {
    try {
        const list = await S3Client.listObjects({
            Bucket,
            Prefix,
        }).promise();

        if (!list.Contents?.length) {
            return;
        }

        const keys = list.Contents.map(
            (content) =>
                content.Key && {
                    Key: content.Key,
                },
        );

        if (!keys) {
            return;
        }

        await S3Client.deleteObjects({
            Bucket,
            Delete: {
                Objects: keys as ObjectIdentifierList,
                Quiet: false,
            },
        }).promise();
    } catch (error) {
        console.error('[purgeFolder] failed to delete', error);

        throw new Error('Unable to delete a s3 path');
    }
};
