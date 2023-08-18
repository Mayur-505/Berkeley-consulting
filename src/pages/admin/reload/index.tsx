"use client"
import i18nInstance from '@/i18n';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        // fetchTranslations()
    }, [])
    async function parseDotNotation(str: any, val: any, obj: any) {
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

    Object.expand = async function (obj: any) {
        for (const key in obj) {
            if (key.indexOf(".") !== -1) {
                // console.log("🚀 ~ file: fetchTranslation.js:71 ~ obj[key]:", obj[key])
                await parseDotNotation(key, obj[key], obj);
            }
        }
        return obj;
    };

    const write = async (data: any) => {
        try {
            let response = {}
            const writePromises = Object.keys(data).map(async (key) => {
                const tempObject = await Object.expand(data[key]);
                response = { ...response, [key]: tempObject }
            });
            await Promise.all(writePromises);
            toast("Translation fetched successfully!")
            setLoader(false)
            localStorage.setItem("translation", JSON.stringify(response))
            i18nInstance.init({
                lng: 'en',
                fallbackLng: 'en',
                resources: {
                    en: {
                        translation: response?.en,
                    },
                    ko: {
                        translation: response?.ko,
                    },

                },
                interpolation: {
                    escapeValue: false,
                },
            });
            setTimeout(() => {

                typeof window !== undefined && window.reload()
            }, 1000);
        } catch (err) {
            throw err;
        }
    };
    const fetchTranslations = async () => {
        setLoader(true)

        await axios.get("https://sheets.googleapis.com/v4/spreadsheets/1FimvluEFSnIgQFOMD2lE6JhaMS9JVZW8iDj6hXYN3Uo/values/berkeley?key=AIzaSyDnOVkbaCom0cJDsR4mw1aosSWQiSV4wy8").then(async (data: any) => {
            setLoader(false)
            let result = {}
            await data?.data?.values?.slice(1).map((row: any) => {
                data?.data?.values[0].slice(1).forEach((title: any, i: number) => {
                    result[title] = result[title] || [];
                    const key = row[0]
                    // console.log("🚀 ~ file: route.ts:83 ~ colTitles.slice ~ key:", key)
                    result = {
                        ...result,
                        [title]: {
                            ...result[title],
                            [key]: row[i + 1] !== "" ? row[i + 1] : undefined,
                        },
                    };
                });
            });
            await write(result)
            console.log('result', result)
            // toast("Translation fetcheds successfully!")
        }).catch((err: any) => {
            setLoader(false)

            return {
            }

        })
    }


    return (
        <div>
            {loader ?
                <div className="flex loaderView">
                    <div className='loader'></div>
                </div> : null

            }
            <ToastContainer />
            <button onClick={fetchTranslations} className='m-3'>
                Reload Transcription
            </button>
        </div>
    )
}

export default Index