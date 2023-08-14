import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
import secret from "../../../secret.json"
const fs = require("fs");

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("🚀 ~ file: getTranslation.ts:8 ~ req:", req.body)

    // const serviceAccountAuth = new JWT({
    //     email: secret.client_email,
    //     key: secret.private_key,
    //     scopes: [
    //         'https://www.googleapis.com/auth/spreadsheets',
    //     ],
    // });

    // const doc = new GoogleSpreadsheet(`${process.env.GOOGLE_SHEET_ID}`, serviceAccountAuth);
    // await doc.loadInfo(); // loads document properties and worksheets
    // // const sheet = doc.sheetsByTitle.[process.env.GOOGLE_SHEET_NAME]; //# get the sheet by title, I left the default title name. If you changed it, then you should use the name of your sheet
    // const sheet = doc.sheetsByIndex[0]; //# get the sheet by index
    // await sheet.loadHeaderRow(); //# loads the header row (first row) of the sheet
    // const colTitles = sheet.headerValues; //# array of strings from cell values in the first row

    // const rows: any = await sheet.getRows({ limit: sheet.rowCount }); //# fetch rows from the sheet (limited to row count)

    let result: any = {};
    let key: any = []
    // rows.map((row: any) => {
    //     key = [...key, row?._rawData[0]]
    //     colTitles.slice(1).forEach((title, index) => {
    //         result[title] = result[title] || [];
    //         const key = row?._rawData[0]
    //         result = {
    //             ...result,
    //             [title]: {
    //                 ...result[title],
    //                 [key]: row?._rawData[index + 1] !== "" ? row?._rawData[index + 1] : undefined,
    //             },
    //         };
    //     });
    // });

    async function parseDotNotation(str, val, obj) {
        let currentObj = obj;
        const keys = str.split(".");
        // console.log("🚀 ~ file: fetchTranslation.js:54 ~ parseDotNotation ~ keys:", keys, str)
        let i;
        const l = Math.max(1, keys.length - 1);
        let key;

        for (i = 0; i < l; ++i) {
            key = keys[i].replace("\n", "");
            currentObj[key] = currentObj[key] || {};
            if (currentObj[key])
                currentObj = currentObj[key]
        }

        currentObj[keys[i]?.replace("\n", "")] = val;
        delete obj[str];
    }


    Object.expand = function (obj) {
        for (const key in obj) {
            if (key.indexOf(".") !== -1) {
                // console.log("🚀 ~ file: fetchTranslation.js:71 ~ obj[key]:", obj[key])
                parseDotNotation(key, obj[key], obj);
            }
        }
        return obj;
    };

    const write = async (data) => {
        try {
            for (const key of Object.keys(data)) {
                const tempObject = Object.expand(data[key]);
                const filePath = `./public/locales/${key}/common.json`;

                await fs.writeFile(filePath, JSON.stringify(tempObject, null, 2), (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
                console.log(`File ${filePath} updated successfully.`);
            }
        } catch (err) {
            console.error(err);
        }
    };
    await write(req.body)
    // console.log("🚀 ~ file: getTranslation.ts:91 ~ result:", result)
    res.status(200).json({ result: req?.body, key });
};

