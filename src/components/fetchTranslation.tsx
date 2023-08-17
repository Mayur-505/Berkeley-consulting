'use server'

const { GoogleSpreadsheet } = require("google-spreadsheet");
const secret = require("../../secret.json");
import { JWT } from 'google-auth-library'
import file from "../../public/locales/en/common.json"
import path from 'path';
import fs from "fs"
//# Initialize the sheet

export const fetchTranslation = async () => {
  const serviceAccountAuth = new JWT({
    email: secret.client_email,
    key: secret.private_key,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });
  const doc = new GoogleSpreadsheet("1FimvluEFSnIgQFOMD2lE6JhaMS9JVZW8iDj6hXYN3Uo", serviceAccountAuth); //# spreadsheet ID

  //# Initialize Auth
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
    return result;
  };

  function parseDotNotation(str, val, obj) {
    let currentObj = obj;
    const keys = str.split(".");
    let i;
    const l = Math.max(1, keys.length - 1);
    let key;

    for (i = 0; i < l; ++i) {
      key = keys[i];
      currentObj[key] = currentObj[key] || {};
      if (currentObj[key])
        currentObj = currentObj[key];
    }

    currentObj[keys[i]] = val;
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
    Object.keys(data).forEach((key, i) => {
      fs.writeFile(
        `./public/locales/${key}/common.json`,
        "{}",
        (err) => {
          if (err) {
            console.error(err);
            throw err

          }
        }
      );
      const tempObject = Object.expand(data[key]);
      try {
        fs.writeFile(
          `./public/locales/${key}/common.json`,
          JSON.stringify(tempObject, null, 2),
          (err) => {
            if (err) {
              console.error(err);
              throw err

            }
          }
        );
      } catch (err) {
        throw err
      }
    });
    return data

  };

  return await init()
    .then(() => read())
    .then((data) => write(data))
    .catch((err) => {
      throw err
    });
}
