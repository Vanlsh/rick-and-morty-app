export interface CharacterModel{
    id: number
    name: string
    species: string
    gender: string
    location: {
        name: string
    }
    status: string
    created: string
    like: boolean
    episodes: number []
    image: string | null
}