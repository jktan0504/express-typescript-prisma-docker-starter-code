export const isCsv = (filename: string) => {
    const fileInfo = filename.split('.');

    return fileInfo[1] === 'csv';
};

export const isPdf = (filename: string) => {
    const fileInfo = filename.split('.');

    return fileInfo[1] === 'pdf';
};

export const isImage = (filename: string) => {
    const fileInfo = filename.split('.');

    return (
        fileInfo[1] === 'jpg' || fileInfo[1] === 'png' || fileInfo[1] === 'jpeg'
    );
};

export const getExtension = (filename: string) => {
    return filename.split('.')[1];
};
