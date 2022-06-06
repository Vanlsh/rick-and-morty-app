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
    status: boolean
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
    likedCharacters: false,
    status: false
}
export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        addCharacter(state, action: PayloadAction<CharacterModel[]>){
            state.character = [...state.character, ...action.payload]
        },
        setCharacter(state, action: PayloadAction<CharacterModel[]>){
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
        },
        setStatus(state, action: PayloadAction<boolean>){
            state.status = action.payload
        },
    }
})

export default characterSlice.reducer;