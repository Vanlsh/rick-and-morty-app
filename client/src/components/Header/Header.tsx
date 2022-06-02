import React from 'react';
import s from './Header.module.scss'
import {SvgIcon, SvgIconProps} from "@mui/material";

const Header = (props: SvgIconProps) => {
    return (
        <div className={s.wrapper}>
            <div className={s.name}>Rick and Morty</div>
            <div>
                <SvgIcon {...props}>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
            </div>
        </div>
    );
};

export default Header;