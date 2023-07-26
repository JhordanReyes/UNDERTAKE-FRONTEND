import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models";
import { userSlice } from "./slices/userSlice";
import { darkModeSlice } from "./slices/darkModeSlice";

export interface AppStore {
    user: User,
    darkMode: boolean
}

export default configureStore<AppStore> ({
    reducer: {
        user: userSlice.reducer,
        darkMode: darkModeSlice.reducer
    }
})