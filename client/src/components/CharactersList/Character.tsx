import {Card} from '@mui/material';
import React from 'react';
import s from './Characters.module.scss'
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";
import {CharacterModel} from "../../services/Character";
import {Link} from "react-router-dom";

interface Props {
    character: CharacterModel
}
const Character = ({character}:Props) => {
    const dispatch = useAppDispatch()
    const {setDetailsId,setLike,setName} = characterSlice.actions
    const user = false
    const clickLike = (e:any, id: number) => {
        e.stopPropagation()
        if(user){
            dispatch(setLike(id))
        }
    }
    const card = (
        <div className={s.wrapper}>
            <div className={s.wrapper__text}>
                <div className={s.name}>{character.name}</div>
                <div className={s.status}>{character.status}</div>
            </div>
            <div className={s.wrapper__buttons}>
                {
                    user ?(
                            <div className={character.like ? s.liked : s.unliked}
                                 onClick={(e:any) => clickLike(e, character.id) }
                            >
                                <FavoriteIcon />
                            </div>
                        )
                        :(
                            <Link to={'/login'} >
                                <div className={s.unliked}
                                     onClick={(e) => e.stopPropagation()}>
                                    <FavoriteIcon />
                                </div>
                            </Link>
                        )
                }

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