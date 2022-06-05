import React from 'react';
import SearchComponent from "../Search/SearchComponent";
import Characters from "../CharactersList/Characters";
import {useAppSelector} from "../../hooks/redux";

const MainPage = () => {
    const {detailsId} = useAppSelector(state => state.characterReducer)
    return (
        <>
            {!detailsId && <SearchComponent/>}
            <Characters/>
        </>
    );
};

export default MainPage;