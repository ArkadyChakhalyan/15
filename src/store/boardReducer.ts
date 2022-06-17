import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardState } from "./types";
import { TKey } from "../types";

const initialState: IBoardState = {
    keys: [],
    initialKeys: []
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setInitialKeysAC: (state, action: PayloadAction<{ keys: TKey[] }>) => {
            state.initialKeys = action.payload.keys;
        },
        setKeysAC: (state, action: PayloadAction<{ keys: TKey[] }>) => {
            state.keys = action.payload.keys;
        }
    }
})

export const { setKeysAC, setInitialKeysAC } = boardSlice.actions;

export default boardSlice.reducer;