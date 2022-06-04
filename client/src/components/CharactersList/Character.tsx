import {Card} from '@mui/material';
import React from 'react';
import s from './Characters.module.scss'
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useAppDispatch} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {CharacterModel} from "../../services/Character";

interface Props {
    character: CharacterModel
}
const Character = ({character}:Props) => {
    const dispatch = useAppDispatch()
    const {setDetailsId} = characterSlice.actions
    const clickLike = (e:any) => {
        e.stopPropagation()
    }
    const card = (
        <div className={s.wrapper}>
            <div className={s.wrapper__text}>
                <div className={s.name}>{character.name}</div>
                <div className={s.status}>{character.status}</div>
            </div>
            <div className={s.wrapper__buttons}>
                <div className={character.like ? s.liked : s.unliked}
                     onClick={(e:any) => clickLike(e) }
                >
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    );
    return (
        <div className={s.item} onClick={() => dispatch(setDetailsId(character.id))}>
            <Card variant="outlined">{card}</Card>
        </div>
    );
};

export default Character;