import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useAddLang} from "./apiHookLang.js";

function LangAdd(props) {
    const {isAdding, addLang} = useAddLang();
    const [formData, setFormData] = useState({
        id:-1,
        name: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData, "formData");
        addLang(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    name="name"
                    label="שם השפה"
                    onChange={handleChange}
                    fullWidth
                    required
                />
            </Box>

            <Button type="submit" variant="contained" color="primary" disabled={isAdding} >
                שמור
            </Button>

        </form>
    );
}

export default LangAdd;