import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScoreState } from "./types";

const initialState: IScoreState = {
    time: 0,
    moves: 0,
    highscore: {
        time: 0,
        moves: 0
    }
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setTimeAC: (state, action: PayloadAction<{ time: number }>) => {
            state.time = action.payload.time;
        },
        setMovesAC: (state, action: PayloadAction<{ moves: number }>) => {
            state.moves = action.payload.moves;
        },
    }
})

export const { setTimeAC, setMovesAC  } = scoreSlice.actions;

export default scoreSlice.reducer;