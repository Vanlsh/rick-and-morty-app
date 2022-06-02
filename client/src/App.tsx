import React, {useEffect, useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import  './styles/index.scss';

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
        <div >
            <FavoriteIcon />
        </div>

        {characters && characters.map((character: any) => {
            return (
                <div key={character.id}>{character.name}</div>
            )
        })}
    </div>
  );
}

export default App;
