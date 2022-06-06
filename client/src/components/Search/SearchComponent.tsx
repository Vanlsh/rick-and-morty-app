import React, {useEffect} from 'react';
import {Button, TextField} from "@mui/material";
import s from './Search.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {characterAPI} from "../../services/CharacterService";
import {CharacterHelper} from "../../services/CharacterHelper";

const SearchComponent = () => {
    const dispatch = useAppDispatch()
    const {addCharacter,
        setPage,
        refreshCharacter,
        setError,setMaxPage,
        setName,
        setLikePageStatus,
        setCharacter,
        setStatus
    } = characterSlice.actions
    const {page, character,name, likedCharacters, status} = useAppSelector(state => state.characterReducer)
    const {data: characters, isError} = characterAPI.useFilterByNameQuery({name,page})
    useEffect(() => {
        dispatch(setError(isError))
        if(characters) {
            const characterArray = CharacterHelper.getCharacter(characters)
            const duplicateChecking = CharacterHelper.checkCharacter(characters.results[0].id, character)
            if (duplicateChecking) {
                dispatch(setCharacter(characterArray))
            } else {
                dispatch(addCharacter(characterArray))
            }
            dispatch(setMaxPage(characters.info.pages))
        }
    },[characters, isError])

    const showAll = () => {
        if(likedCharacters){
            dispatch(setStatus(false))
            dispatch(setLikePageStatus(false))
            dispatch(setName(''))
            dispatch(setPage(1))
        }

    }
    const showLiked = () => {
        if(!likedCharacters){
            dispatch(setStatus(true))
            dispatch(setLikePageStatus(true))
            dispatch(setName(''))
            dispatch(setPage(1))
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
                <Button variant={status ? "contained" : "outlined"} onClick={showLiked}>Show liked</Button>
                <Button variant={status ? "outlined" : "contained"} onClick={showAll}>Show all</Button>
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