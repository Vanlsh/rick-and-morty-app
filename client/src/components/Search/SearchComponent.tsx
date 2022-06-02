import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import s from './Search.module.scss'
const SearchComponent = () => {
    const [status, setStatus] = useState<boolean>(false)
    const filterItem = () => {
        if(status){
            setStatus(false)
        } else {
            setStatus(true)
        }
    }
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__like}>
                <Button variant={status ? "contained" : "outlined"} onClick={filterItem}>Show liked</Button>
                <Button variant={status ? "outlined" : "contained"} onClick={filterItem}>Show all</Button>
            </div>
            <div className={s.wrapper__find}>
                <TextField id="standard-basic" label="Search" variant="standard" />
                <Button variant="contained">Find</Button>
            </div>
        </div>
    );
};

export default SearchComponent;