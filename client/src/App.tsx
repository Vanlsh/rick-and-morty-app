import React from 'react';
import  './styles/index.scss';
import SearchComponent from './components/Search/SearchComponent';
import Characters from "./components/CharactersList/Characters";
import Header from "./components/Header/Header";
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={"app"}>
        <Header/>
        <SearchComponent/>
        <Routes>
            <Route path="/" element={<Characters/>}/>
            <Route path="*" element={<Characters/>}/>
        </Routes>
    </div>
  );
}

export default App;
