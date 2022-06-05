import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import s from './Search.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {characterAPI} from "../../services/CharacterService";
import {CharacterModel} from "../../services/Character";

const getEpisode = (itemsOfEpisode: string []) : number []=> {
    const episodeArrayNumber = itemsOfEpisode.map(value => {
        const splitValue = value.split('/')
        return Number(splitValue[splitValue.length - 1])
    })
    return episodeArrayNumber
}
const SearchComponent = () => {
    const [status, setStatus] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const dispatch = useAppDispatch()
    const {addCharacter, setPage, refreshCharacter, setError,setMaxPage} = characterSlice.actions
    const {page} = useAppSelector(state => state.characterReducer)
    const {data: characters, isError} = characterAPI.useFilterByNameQuery({name,page})
    useEffect(() => {
        dispatch(setError(isError))
        if(characters) {
            let itemsOfCharacter: CharacterModel[] = []
            for(let i = 0; i < characters.results.length; i++) {
                const {id, name, species, gender,location,episode, status, created, image} = characters.results[i]
                const episodes = getEpisode(episode)
                const item: CharacterModel = {
                    id, name, species,gender,location,status, episodes, created, image, like: false
                }
                itemsOfCharacter.push(item)
            }
            dispatch(addCharacter(itemsOfCharacter))
            dispatch(setMaxPage(characters.info.pages))
        }
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
        setName(value)
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
                <Button variant="contained">Find</Button>
            </div>
        </div>
    );
};

export default SearchComponent;