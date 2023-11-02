const B2 = require('backblaze-b2');
const fs = require('fs');

let applicationKeyId: string | undefined = 'f67016ba57cf' || process.env.NEXT_PUBLIC_B2_APPLICATION_KEY_ID
let applicationKey: string | undefined = '005302c40f2cfa022b022cb008f90958519e71b08c' || process.env.NEXT_PUBLIC_B2_APPLICATION_KEY

const b2 = new B2({
    applicationKeyId: applicationKeyId,
    applicationKey: applicationKey
});
export class FileService {
    constructor() {
        let me = this;
    }
    public async uploadFileInS3(folderName: string, files: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                await b2.authorize();
                let allFiles = await Promise.all(files.map(async (file: any) => {
                    return await this.uploadFile(folderName, file)
                }))
                resolve(allFiles || [])
            }
            catch (error: any) {
                console.log("error = " + error)
                reject(error.message)
            }
        });
    }

    async streamToBuffer(stream: any): Promise<Buffer> {
        const buffer: Uint8Array[] = [];

        return await new Promise((resolve, reject) =>
            stream
                .on('error', (error: any) => reject(error))
                .on('data', (data: any) => buffer.push(data))
                .on('end', () => resolve(Buffer.concat(buffer))),
        );
    }

    public async uploadFile(folderName: string, file: any, fileName: any = ""): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                await b2.authorize();
                const data = await b2.getUploadUrl({
                    bucketId: process.env.NEXT_PUBLIC_BLACKBLAZE_BUCKETID
                })
                const readDataData = await this.streamToBuffer(fs.createReadStream(file));

                let response = await b2.uploadFile({
                    uploadUrl: data.data.uploadUrl,
                    uploadAuthToken: data.data.authorizationToken,
                    fileName: `${folderName}/${fileName}`,
                    data: readDataData,
                    contentLength: 1000000000
                });
                resolve({ fileName: `${process.env.NEXT_PUBLIC_BACKBLAZE_ACCESS_URL}${response.data.fileName}`, fileId: response?.data?.fileId })
            }
            catch (error: any) {
                console.log("error = " + error)
                reject(error.message)
            }
        })
    }
}
