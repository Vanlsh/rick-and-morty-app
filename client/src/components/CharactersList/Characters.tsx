import React from 'react';
import s from './Characters.module.scss'
import Character from "./Character";

const Characters = () => {
    return (
        <div className={s.container}>
            <Character/>
        </div>
    );
};

export default Characters;