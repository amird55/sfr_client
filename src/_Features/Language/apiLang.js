import {backURL} from "../../vars.jsx";
const section = "LG";

async function AddLang(formData) {
    let url=`${backURL}/${section}/Add`;
    console.log(url)
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function GetAllLangs() {
    let url=`${backURL}/${section}/List`;
    console.log(url);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export{
    GetAllLangs,
    AddLang,
}