import React from 'react';
import s from './Header.module.scss'
import {SvgIcon, SvgIconProps} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {characterSlice} from "../../store/redusers/CharacterSlice";

const Header = (props: SvgIconProps) => {
    const dispatch = useAppDispatch()
    const {setDetailsId} = characterSlice.actions
    const {detailsId} = useAppSelector(state => state.characterReducer)
    const backMain = () => {
        dispatch(setDetailsId(null))
    }
    return (
        <div className={s.wrapper}>
            <div className={s.name}>Rick & Morty</div>
            <div className={s.home} onClick={backMain}>
                <SvgIcon {...props}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
            </div>
        </div>
    );
};

export default Header;