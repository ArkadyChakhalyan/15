import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardState } from "./types";
import { TKeyLine } from "../types";

const initialState: IBoardState = {
    keys: [],
    initialKeys: [],
    blockMoves: false,
    isBoardCompleted: false
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setInitialKeysAC: (state, action: PayloadAction<{ keys: TKeyLine[] }>) => {
            state.initialKeys = action.payload.keys;
        },
        setKeysAC: (state, action: PayloadAction<{ keys: TKeyLine[] }>) => {
            state.keys = action.payload.keys;
        },
        setBlockMoves: (state, action: PayloadAction<{ blockMoves: boolean }>) => {
            state.blockMoves = action.payload.blockMoves;
        },
        setIsBoardCompleted: (state, action: PayloadAction<{ isBoardCompleted: boolean }>) => {
            state.isBoardCompleted = action.payload.isBoardCompleted;
        }
    }
})

export const { setKeysAC, setInitialKeysAC, setBlockMoves, setIsBoardCompleted } = boardSlice.actions;

export default boardSlice.reducer;