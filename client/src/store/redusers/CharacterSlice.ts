import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface CharacterState {
    
    liked: boolean
}

const initialState: CharacterState = {
    liked: true,
}
export const noteSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {

    }
})

export default noteSlice.reducer;