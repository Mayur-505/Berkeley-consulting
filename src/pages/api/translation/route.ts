
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
import secret from "../../../../secret.json"
import { NextResponse } from 'next/server';
import fs from "fs"

export async function GET() {

    const serviceAccountAuth = new JWT({
        email: secret.client_email,
        key: secret.private_key,
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
        ],
    });

    const doc = new GoogleSpreadsheet(`1FimvluEFSnIgQFOMD2lE6JhaMS9JVZW8iDj6hXYN3Uo`, serviceAccountAuth);
    console.log('doc', doc)

    const init = async () => {
        await doc.useServiceAccountAuth({
            client_email: secret.client_email,
            private_key: secret.private_key,
        })
    };

    const read = async () => {
        await doc.loadInfo(); //# loads document properties and worksheets
        const sheet = doc.sheetsByTitle.berkeley; //# get the sheet by title, I left the default title name. If you changed it, then you should use the name of your sheet
        await sheet.loadHeaderRow(); //# loads the header row (first row) of the sheet
        const colTitles = sheet.headerValues; //# array of strings from cell values in the first row

        const rows = await sheet.getRows({ limit: sheet.rowCount }); //# fetch rows from the sheet (limited to row count)
        // console.log("row == ", rows);
        let result = {};
        rows.map((row) => {
            colTitles.slice(1).forEach((title) => {
                result[title] = result[title] || [];
                const key = row[colTitles[0]];
                result = {
                    ...result,
                    [title]: {
                        ...result[title],
                        [key]: row[title] !== "" ? row[title] : undefined,
                    },
                };
                // console.log("result", result)
            });
        });
        // console.log("🚀 ~ file: route.ts:84 ~ read ~ result:", result)
        return result;
    };

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
                currentObj = currentObj[key];
        }

        currentObj[keys[i]?.replace("\n", "")] = val;
        delete obj[str];
    }

    Object.expand = async function (obj) {
        for (const key in obj) {
            if (key.indexOf(".") !== -1) {
                // console.log("🚀 ~ file: fetchTranslation.js:71 ~ obj[key]:", obj[key])
                await parseDotNotation(key, obj[key], obj);
            }
        }
        return obj;
    };

    const write = async (data) => {
        try {
            const writePromises = Object.keys(data).map(async (key) => {
                const tempObject = await Object.expand(data[key]);
                return new Promise((resolve, reject) => {
                    fs.writeFile(
                        `./public/locales/${key}/common.json`,
                        JSON.stringify(tempObject, null, 2),
                        (err) => {
                            if (err) {
                                console.error(err);
                                reject(err);
                            } else {
                                resolve();
                            }
                        }
                    );
                });
            });

            await Promise.all(writePromises);
        } catch (err) {
            throw err;
        }
    };
    try {
        await init()
        let data = await read()
        await write(data)
        return new NextResponse(JSON.stringify({ result: data }), {
            status: 200,
        })

    } catch (err) {
        return new NextResponse(JSON.stringify({ result: err }), {
            status: 400,
        })
    }

    // .then(async () => await read())
    // .then(async (data) => await write(data))
    // .catch((err) => new NextResponse(JSON.stringify({ result: err }), {
    //     status: 400,
    // }));

};

