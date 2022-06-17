import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./types";
import { TKey } from "../types";

const initialState: IState = {}

export const counterSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        setTimeAC: (state, action: PayloadAction<{ time: number }>) => {
            state.time = action.payload.time;
        },
        setMovesAC: (state, action: PayloadAction<{ moves: number }>) => {
            state.moves = action.payload.moves;
        },
        setInitialKeysAC: (state, action: PayloadAction<{ keys: TKey[] }>) => {
            state.initialKeys = action.payload.keys;
        },
        setKeysAC: (state, action: PayloadAction<{ keys: TKey[] }>) => {
            state.keys = action.payload.keys;
        }
    }
})

export const { setKeysAC, setInitialKeysAC, setTimeAC, setMovesAC  } = counterSlice.actions;

export default counterSlice.reducer;