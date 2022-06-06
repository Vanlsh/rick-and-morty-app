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
    const [currentPageOfLike, setCurrentPageOfLike] = useState<number>(1)
    const {
        character,
        detailsId,
        page,
        maxPage,
        isError,
        likedCharacters
    } = useAppSelector(state => state.characterReducer)
    useEffect(() => {
        console.log("page ---- " + page)
    },[page])
    useEffect(() => {
        let countLike: number = 0
        if(likedCharacters){
            for(let i = 0; i < character.length; i++){
                if(CharacterHelper.getStorageLikeStatus(character[i].id)){
                    countLike++
                }
            }
            if(countLike/currentPageOfLike < 20 && page < maxPage){
                console.log(page)
                console.log(currentPageOfLike)
            }
        }
        console.log(countLike)
    },[likedCharacters,page])
    const addPage = () => {
        if(page < maxPage){
            dispatch(setPage(page + 1))
        }
    }
    const addPageForLike = () => {
        if(page < maxPage){
            setCurrentPageOfLike(currentPageOfLike + 1)
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
                likedCharacters ? (
                    <div className={s.next__button}>
                        <Button onClick={addPageForLike} variant="contained">NextT</Button>
                    </div>
                    ) : (
                    <div className={s.next__button}>
                        <Button onClick={addPage} variant="contained">Next</Button>
                    </div>
                    )
            )}
      </div>
    );
};

export default Characters;