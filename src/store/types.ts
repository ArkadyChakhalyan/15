import { TKey } from "../types";

export interface IState {
    initialKeys?: TKey[];
    keys?: TKey[];
    time?: number;
    moves?: number;
}