import { TKeyLine } from "../types";
import { store } from "./store";

export interface IGameState {
    score: IScoreState,
    board: IBoardState
}

export interface IScoreState {
    time: number;
    moves: number;
}

export interface IBoardState {
    initialKeys: TKeyLine[];
    keys: TKeyLine[];
    blockMoves: boolean;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch