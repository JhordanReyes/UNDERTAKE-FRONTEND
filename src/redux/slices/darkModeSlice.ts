import { createSlice } from "@reduxjs/toolkit";
import { removeLocalStorage, saveLocalStorageValue } from "../../utilities";

const initialState: boolean = false

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: localStorage.getItem("darkMode") ? JSON.parse(localStorage.getItem("darkMode") as string) : initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            const cambio = !state
            cambio ? document.body.classList.add("dark") : document.body.classList.remove("dark")
            saveLocalStorageValue("darkMode", cambio)
            return cambio
        },
        removeDarkMode: () => {
            document.body.classList.remove("dark")
            removeLocalStorage("darkMode")
            return initialState
        }
    }
})

export const {toggleDarkMode, removeDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer