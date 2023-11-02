// pages/api/uploadToB2.ts

import { Request, Response } from "express";
import multer from 'multer';
import { FileService } from './util/backblaze';
const fileService = new FileService();

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = `${uniqueSuffix}-${file.originalname}`;

        callback(null, filename);
    },
});
const upload = multer({ storage: storage });

const handler = async (req: Request, res: Response) => {

    try {
        upload.single('file')(req, res, async (err: any) => {
            if (err) {
                return res.status(400).json({ error: 'File upload failed.' });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded.' });
            }

            const filePath = req?.file.path;
            const response = await fileService.uploadFile("berkeley", filePath, "translation.json")

            res.status(200).json({ message: 'File uploaded successfully', response });
        });
    } catch {
        res.status(500).json({
            message: "Internal Server Error",
            status: false
        });
    }
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;