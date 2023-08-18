const { GoogleSpreadsheet } = require("google-spreadsheet");
const secret = require("./secret.json");
const fs = require("fs");

//# Initialize the sheet
const doc = new GoogleSpreadsheet("1FimvluEFSnIgQFOMD2lE6JhaMS9JVZW8iDj6hXYN3Uo"); //# spreadsheet ID

//# Initialize Auth
const init = async () => {
    await doc.useServiceAccountAuth({
        client_email: secret.client_email,
        private_key: secret.private_key,
    })
};
// const read = async () => {
//     console.log("🚀 ~ file: fetch Translation.js:19 ~ read ~ read:")

// };
const read = async () => {
    await doc.loadInfo(); //# loads document properties and worksheets
    const sheet = doc.sheetsByTitle.berkeley; //# get the sheet by title, I left the default title name. If you changed it, then you should use the name of your sheet
    await sheet.loadHeaderRow(); //# loads the header row (first row) of the sheet
    const colTitles = sheet.headerValues; //# array of strings from cell values in the first row

    const rows = await sheet.getRows({ limit: sheet.rowCount }); //# fetch rows from the sheet (limited to row count)
    // console.log("row == ", rows);
    let result = {};
    //# map rows values and create an object with keys as columns titles starting from the second column (languages names) and values as an object with key value pairs, where the key is a key of translation, and value is a translation in a respective language
    // eslint-disable-next-line array-callback-return
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

const write = (data) => {
    Object.keys(data).forEach((key) => {

        const tempObject = Object.expand(data[key]);
        // console.log("🚀 ~ file: fetchTranslation.js:80 ~ Object.keys ~ tempObject:", tempObject)
        fs.writeFile(
            `./public/locales/${key}/translation.json`,
            JSON.stringify(tempObject, null, 2),
            (err) => {
                if (err) {
                    console.error(err);
                }
            }
        );
    });
};

init()
    .then(() => read())
    .then((data) => write(data))
    .catch((err) => console.log("ERROR!!!!", err));
