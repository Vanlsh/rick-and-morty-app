import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CharacterModel} from "../../services/Character";


interface CharacterState {
    character: CharacterModel[]
    detailsId: number | null
}

const initialState: CharacterState = {
    character: [],
    detailsId: null
}
export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacter(state, action: PayloadAction<CharacterModel[]>){
            state.character = action.payload
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
        }
    }
})

export default characterSlice.reducer;