import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import s from './Search.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {characterAPI} from "../../services/CharacterService";
import {CharacterHelper} from "../../services/CharacterHelper";

const SearchComponent = () => {
    const [status, setStatus] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {addCharacter, setPage, refreshCharacter, setError,setMaxPage,setName} = characterSlice.actions
    const {page, character,name} = useAppSelector(state => state.characterReducer)
    const {data: characters, isError} = characterAPI.useFilterByNameQuery({name,page})

    useEffect(() => {
        dispatch(setError(isError))
        if(characters) {
            const characterArray = CharacterHelper.getCharacter(characters,character)
            if(!characterArray) return
            dispatch(addCharacter(characterArray))
            dispatch(setMaxPage(characters.info.pages))}
        },[characters, isError])

    const filterItem = () => {
        if(status){
            setStatus(false)
        } else {
            setStatus(true)
        }
    }
    const filterCharacter = (value:any) => {
        dispatch(refreshCharacter())
        dispatch(setPage(1))
        dispatch(setName(value))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__like}>
                <Button variant={status ? "contained" : "outlined"} onClick={() => dispatch(setPage(page + 1))}>Show liked</Button>
                <Button variant={status ? "outlined" : "contained"} onClick={filterItem}>Show all</Button>
            </div>
            <div className={s.wrapper__find}>
                <TextField
                    onChange={(e) => filterCharacter(e.target.value)}
                    value={name}
                    id="standard-basic"
                    label="Search"
                    variant="standard" />
            </div>
        </div>
    );
};

export default SearchComponent;