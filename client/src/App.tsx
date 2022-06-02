import React, {useEffect, useState} from 'react';
import  './styles/index.scss';
import SearchComponent from './components/Search/SearchComponent';
import Characters from "./components/CharactersList/Characters";
import Header from "./components/Header/Header";

function App() {
  const [characters, setCharacters] = useState<any>()
    useEffect(() => {
        getCharacter()
        console.log(characters)
    }, [])
    useEffect(() => {
        console.log(characters)
    },[characters])
  const getCharacter = () => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(result => {
          setCharacters(result.results)
        })
  }
  return (
    <div className={"app"}>
        <Header/>
        <SearchComponent/>
        <Characters/>
    </div>
  );
}

export default App;
