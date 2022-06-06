import {CharacterModel} from "./Character";

export class CharacterHelper{
    static getEpisode(episodes: any []) {
        const episodeArrayNumber = episodes.map(value => {
            const splitValue = value.split('/')
            return Number(splitValue[splitValue.length - 1])
        })
        return episodeArrayNumber
    }
    static getCharacter(characters: any, characterInState: any) {
        let itemsOfCharacters: CharacterModel[] = []
        if(!!characterInState.length){
            const check = CharacterHelper.check(characters.results[0].id,characterInState)
            if(check) {
                return false
            }
        }
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
    private static check(id: any, idInState: any) {
        for (let i = 0;i < idInState.length; i++){
            if(id === idInState[i].id) {
                return true
            }
        }
        return false
    }
    static checkCharacter(characters: any, characterInState: any){
        if(!!characterInState.length){
            for (let i = 0;i < characterInState.length; i++){
                if(characters.results[0].id === characterInState[i].id) {
                    return true
                }
            }
        }
        return false
    }
    static getStorageLikeStatus(id: number): boolean {
        const storageLike: string | null  = localStorage.getItem(`character${id}`)
        if(storageLike){
            return JSON.parse(storageLike)
        } else {
            return false
        }
    }
}