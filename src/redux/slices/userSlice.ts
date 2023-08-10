import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models";
import { removeLocalStorage, saveLocalStorageObject } from "../../utilities";

export const EmptyUserState: User = {
    id: 0,
    userName: "",
    email: "",
    password: ""
}

const userKey = "user"

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            saveLocalStorageObject(userKey, {id: 1, ...action.payload})
            return {id: 1, ...action.payload}
        },
        updateUser: (state, action) => {
            const result = {...state, ...action.payload}
            saveLocalStorageObject(userKey, result)
            return result
        },
        resetUser: () => {
            removeLocalStorage(userKey)
            return EmptyUserState
        }
    }
})

export const {createUser, resetUser, updateUser} = userSlice.actions;

export default userSlice.reducer;