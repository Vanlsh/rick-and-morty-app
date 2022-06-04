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
        }
    }
})

export default characterSlice.reducer;