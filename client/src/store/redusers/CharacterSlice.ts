import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CharacterModel} from "../../services/Character";


interface CharacterState {
    character: CharacterModel[]
    detailsId: number | null
    page: number
    maxPage: number
    isError: boolean
}

const initialState: CharacterState = {
    character: [],
    detailsId: null,
    page: 1,
    maxPage: 2,
    isError: false,
}
export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        addCharacter(state, action: PayloadAction<CharacterModel[]>){
            state.character = [...state.character, ...action.payload]
        },
        setDetailsId(state, action: PayloadAction<number | null>) {
            state.detailsId = action.payload
        },
        setLike(state, action: PayloadAction<number | null>){
            state.character.forEach(item => {
                if(item.id === action.payload){
                    item.like = !item.like

                }
            })
        },
        setPage(state, action: PayloadAction<number>){
            console.log(action.payload)
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
    }
})

export default characterSlice.reducer;