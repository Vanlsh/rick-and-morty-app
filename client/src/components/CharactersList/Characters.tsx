import React, {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {Button} from "@mui/material";
import Character from "./Character";
import Details from "./Details/Details";
import s from './Characters.module.scss'
import {CharacterHelper} from "../../services/CharacterHelper";
import {CharacterModel} from "../../services/Character";

const Characters = () => {
    const dispatch = useAppDispatch()
    const {setPage} = characterSlice.actions

    const {
        character,
        detailsId,
        page,
        maxPage,
        isError,
        likedCharacters
    } = useAppSelector(state => state.characterReducer)

    const addPage = () => {
        if(page < maxPage){
            dispatch(setPage(page + 1))
        }
    }
    const showItems = (item: CharacterModel) : any => {
        if(likedCharacters && CharacterHelper.getStorageLikeStatus(item.id)) {
            return (
                <Character
                    key={item.id}
                    character={item}
                />
            )
        } else if(!likedCharacters){
            return (
                <Character
                    key={item.id}
                    character={item}
                />
            )
        } else {
            return ''
        }
    }
    return (
        <div className={s.container}>
            {
                detailsId
                    ?
                    (<Details id={detailsId}/>)
                    :
                    isError ? (
                        <div>Character not found</div>

                    ) : (character && character.map((item: CharacterModel) => showItems(item)))
            }
            {(!detailsId && character && maxPage > page) &&(
                <div className={s.next__button}>
                    <Button onClick={addPage} variant="contained">Next</Button>
                </div>
            )}
      </div>
    );
};

export default Characters;