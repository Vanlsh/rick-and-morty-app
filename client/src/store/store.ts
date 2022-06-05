import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import characterReducer from "./redusers/CharacterSlice"
import {characterAPI} from "../services/CharacterService";
import {userAPI} from "../services/UserService";

const rootReducer = combineReducers({
    characterReducer,
    [characterAPI.reducerPath]: characterAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware => getDefaultMiddleware(
            {serializableCheck: false})
            .concat(characterAPI.middleware).concat(userAPI.middleware))

    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AddDispatch = AppStore['dispatch']