import axios from 'axios'
import React, { useEffect } from 'react'

const Index = () => {
    useEffect(() => {

        fetchTranslation()
    }, [])

    const fetchTranslation = async () => {
        await axios.get("https://sheets.googleapis.com/v4/spreadsheets/1FimvluEFSnIgQFOMD2lE6JhaMS9JVZW8iDj6hXYN3Uo/values/berkeley?key=AIzaSyDnOVkbaCom0cJDsR4mw1aosSWQiSV4wy8").then(async data => {
            // setLoader(false)
            let result = {}
            await data?.data?.values?.slice(1).map((row) => {
                data?.data?.values[0].slice(1).forEach((title, i) => {
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

            console.log("result", result)
            // await write(result)


            axios.post("/api/getTranslation", result).then(data => {
                console.log("🚀 ~ file: index.tsx:34 ~ axios.post ~ data:", data)
            }).catch(errr => {
                console.log("🚀 ~ file: index.tsx:36 ~ axios.post ~ errr:", errr)


            })


            // toast("Translation fetcheds successfully!")
        }).catch(err => {
            // setLoader(false)

            return {
            }

        })
    }

    return (
        <div>Index</div>
    )
}

export default Index