import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CharacterModel} from "../../services/Character";


interface CharacterState {
    character: CharacterModel[]
    detailsId: number | null
    page: number
    maxPage: number
    isError: boolean
    name: string
    likedCharacters: boolean
}
interface ILike {
    id: number
    status: boolean
}

const initialState: CharacterState = {
    character: [],
    detailsId: null,
    page: 1,
    maxPage: 2,
    isError: false,
    name: '',
    likedCharacters: false
}
export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        addCharacter(state, action: PayloadAction<CharacterModel[]>){
            console.log("addCharacter")
            console.log(state.page)
            state.character = [...state.character, ...action.payload]
        },
        setCharacter(state, action: PayloadAction<CharacterModel[]>){
            console.log("setCharacter")
            console.log(state.page)
            state.character = action.payload
        },
        setDetailsId(state, action: PayloadAction<number | null>) {
            state.detailsId = action.payload
        },
        setLike(state, action: PayloadAction<ILike>){
            state.character.forEach(item => {
                if(action.payload.id === item.id){
                    item.like = action.payload.status
                }
            })
        },
        setPage(state, action: PayloadAction<number>){
            console.log()
            state.page = action.payload
        },
        refreshCharacter(state){
            state.character = []
        },
        setMaxPage(state, action: PayloadAction<number>){
            state.maxPage = action.payload
        },
        setError(state, action: PayloadAction<boolean>){
            state.isError = action.payload
        },
        setName(state, action: PayloadAction<string>){
            state.name = action.payload
        },
        setLikePageStatus(state, action: PayloadAction<boolean>){
            state.likedCharacters = action.payload
        }
    }
})

export default characterSlice.reducer;