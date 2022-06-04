import React, {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {characterAPI} from '../../services/CharacterService'
import characterReducer, {characterSlice} from "../../store/redusers/CharacterSlice";
import {CharacterModel} from "../../services/Character";
import PaginationComponent from './PaginationComponent/PaginationComponent';
import Character from "./Character";
import s from './Characters.module.scss'
import Details from "./Details/Details";

const getEpisode = (itemsOfEpisode: string []) : number []=> {
    const episodeArrayNumber = itemsOfEpisode.map(value => {
        const splitValue = value.split('/')
        return Number(splitValue[splitValue.length - 1])
    })
    return episodeArrayNumber
}
const Characters = () => {
    const dispatch = useAppDispatch()
    const {setCharacter} = characterSlice.actions
    const {character,detailsId} = useAppSelector(state => state.characterReducer)
    const {data: characters} = characterAPI.useFetchAllCharactersQuery("")

    useEffect(() => {
        if(characters) {
            let itemsOfCharacter: CharacterModel[] = []
            for(let i = 0; i < characters.results.length; i++) {
                const {id, name, species, gender,location,episode, status, created} = characters.results[i]
                const episodes = getEpisode(episode)
                const item: CharacterModel = {
                    id, name, species,gender,location,status, episodes, created, img: null, like: false
                }
                itemsOfCharacter.push(item)
            }
            console.log(itemsOfCharacter)
            dispatch(setCharacter(itemsOfCharacter))
        }
    },[characters])

    return (
        <div className={s.container}>
            {
                detailsId
                    ?
                    (<Details id={detailsId}/>)
                    :
                    (character && character.map((item: any) => (
                        <Character
                            key={item.id}
                            character={item}
                        />
                    ))
                )
            }
            {
                (!detailsId && character) && <PaginationComponent/>
            }
      </div>
    );
};

export default Characters;