import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {Button} from "@mui/material";
import Character from "./Character";
import Details from "./Details/Details";
import s from './Characters.module.scss'

const Characters = () => {
    const dispatch = useAppDispatch()
    const {setPage} = characterSlice.actions
    const {
        character,
        detailsId,
        page,
        maxPage,
        isError,
    } = useAppSelector(state => state.characterReducer)

    const addPage = () => {
        if(page < maxPage){
            dispatch(setPage(page + 1))
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

                    ) : (
                        (character && character.map((item: any) => {
                                return (
                                    <Character
                                        key={item.id}
                                        character={item}
                                    />
                                )
                        })
                        )
                    )

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