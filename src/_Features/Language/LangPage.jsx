import React from 'react';
import LangAdd from "./LangAdd.jsx";
import LangList from "./LangList.jsx";

function LangPage(props) {
    return (
        <>
            <LangAdd />
            <LangList />
        </>
    );
}

export default LangPage;