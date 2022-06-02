import {Card} from '@mui/material';
import React from 'react';
import s from './Characters.module.scss'
import FavoriteIcon from "@mui/icons-material/Favorite";

const Character = () => {
    const card = (
        <div className={s.wrapper}>
            <div className={s.wrapper__text}>
                <div className={s.name}>Rick Sanchez</div>
                <div className={s.status}>Alive</div>
            </div>
            <div className={s.wrapper__buttons}>
                <div className={s.like}>
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <Card variant="outlined">{card}</Card>
        </div>
    );
};

export default Character;