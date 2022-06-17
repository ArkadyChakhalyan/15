import { TKey } from "../types";
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
    initialKeys: TKey[];
    keys: TKey[];
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch