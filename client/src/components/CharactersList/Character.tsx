import {Card} from '@mui/material';
import React, {useEffect} from 'react';
import s from './Characters.module.scss'
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {CharacterModel} from "../../services/Character";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props {
    character: CharacterModel
}

const getStorageLike = (id: number) : boolean=> {
    const storageLike: string | null  = localStorage.getItem(`character${id}`)
    if(storageLike){
        return JSON.parse(storageLike)
    } else {
        return false
    }
}

const Character = ({character}:Props) => {
    const storageLike: string | null  = localStorage.getItem(`character${character.id}`)
    let likedItemState : boolean
    if(storageLike){
        likedItemState = JSON.parse(storageLike)
    } else {
        likedItemState = false
    }
    const [likeStatus, setLikeStatus] = useLocalStorage<boolean>(`character${character.id}`,likedItemState)
    const dispatch = useAppDispatch()
    const {setDetailsId,setLike} = characterSlice.actions
    useEffect(() => {
        const id = character.id
        const status = likeStatus
        dispatch(setLike({id,status}))
    },[likeStatus])
    const clickLike = (e:any, id: number) => {
        e.stopPropagation()
        const status = !likeStatus
        dispatch(setLike({id,status}))
        setLikeStatus(status)
    }
    const card = (
        <div className={s.wrapper}>
            <div className={s.wrapper__text}>
                <div className={s.name}>{character.name}</div>
                <div className={s.status}>{character.status}</div>
            </div>
            <div className={s.wrapper__buttons}>
                <div className={likeStatus ? s.liked : s.unliked}
                     onClick={(e:any) => clickLike(e, character.id) }
                >
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    );
    return (
        <div className={s.item} onClick={() => dispatch(setDetailsId(character.id))}>
            <div>{character.id}</div>
            <Card variant="outlined">{card}</Card>
        </div>
    );
};

export default Character;