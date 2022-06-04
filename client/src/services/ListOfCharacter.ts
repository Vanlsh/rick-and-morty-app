import {CharacterModel} from "./Character";

export class ListOfCharacter {
    characters: CharacterModel[] = []

    public initialCharacters (items: CharacterModel[]){
      for (let i = 0; i < 10; i++){
          this.characters.push(items[i])
      }
    }


}