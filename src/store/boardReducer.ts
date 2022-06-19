import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoardState } from "./types";
import { TTileRow } from "../types";

const initialState: IBoardState = {
    tiles: [],
    initialTiles: [],
    blockMoves: false,
    isBoardCompleted: false
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setInitialTilesAC: (state, action: PayloadAction<{ tiles: TTileRow[] }>) => {
            state.initialTiles = action.payload.tiles;
        },
        setTilesAC: (state, action: PayloadAction<{ tiles: TTileRow[] }>) => {
            state.tiles = action.payload.tiles;
        },
        setBlockMoves: (state, action: PayloadAction<{ blockMoves: boolean }>) => {
            state.blockMoves = action.payload.blockMoves;
        },
        setIsBoardCompleted: (state, action: PayloadAction<{ isBoardCompleted: boolean }>) => {
            state.isBoardCompleted = action.payload.isBoardCompleted;
        }
    }
})

export const { setTilesAC, setInitialTilesAC, setBlockMoves, setIsBoardCompleted } = boardSlice.actions;

export default boardSlice.reducer;