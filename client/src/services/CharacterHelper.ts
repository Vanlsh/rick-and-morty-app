import {CharacterModel} from "./Character";

export class CharacterHelper{

    static getEpisode(episodes: any []) {
        return episodes.map(value => {
            const splitValue = value.split('/')
            return Number(splitValue[splitValue.length - 1])
        })
    }

    static getCharacter(characters: any) {
        let itemsOfCharacters: CharacterModel[] = []
        for(let i = 0; i < characters.results.length; i++) {
            const {id, name, species, gender,location,episode, status, created, image} = characters.results[i]
            const episodes = CharacterHelper.getEpisode(episode)
            const item: CharacterModel = {
                id, name, species,gender,location,status, episodes, created, image, like: false
            }
            itemsOfCharacters.push(item)
        }
        return itemsOfCharacters
    }

    static checkCharacter(id: number, characterInState: any){
        if(!!characterInState.length){
            if(id < characterInState[0].id){
                return true
            }
            for (let i = 0;i < characterInState.length; i++){
                if(id === characterInState[i].id ) {
                    return true
                }
            }
        }
        return false
    }

    static getStorageLikeStatus(id: number): boolean {
        const storageLike: string | null  = localStorage.getItem(`character_${id}`)
        if(storageLike){
            return JSON.parse(storageLike)
        } else {
            return false
        }
    }
}