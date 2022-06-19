import { TTileRow } from "../types";
import { store } from "./store";

export interface IGameState {
    score: IScoreState,
    board: IBoardState
}

export interface IScoreState {
    time: number;
    moves: number;
    highscore: IHighscore;
}

interface IHighscore {
    time: number;
    moves: number;
}

export interface IBoardState {
    initialTiles: TTileRow[];
    tiles: TTileRow[];
    blockMoves: boolean;
    isBoardCompleted: boolean;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch