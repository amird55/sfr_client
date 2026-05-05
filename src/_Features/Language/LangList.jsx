import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useGetLangs} from "./apiHookLang.js";

function LangList() {
    const {  data: { list: LangArr } = {}, isLoading, isError, error} = useGetLangs();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    // const data = [
    //     {id:1, name:"English"},
    //     {id:2, name:"Arabic"},
    //     {id:3, name:"French"},
    //     {id:4, name:"Spanish"},
    // ]
    return (
        <>
            <Typography variant="h2" sx={{ textAlign: 'center', mt: 2 }}>
                שפות
            </Typography>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>מזהה</TableCell>
                    <TableCell>שם</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {LangArr.map((item)=>(
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </>
    );
}

export default LangList;