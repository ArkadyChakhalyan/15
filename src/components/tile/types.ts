import { TTile, TTileRow } from "../../types";

export interface ITileProps {
    tiles: TTileRow[];
    label: TTile;
    direction: EMoveDirection;
    left: number;
    top: number;
}

export enum EMoveDirection {
    RIGHT = 'right',
    LEFT = 'left',
    UP = 'up',
    DOWN = 'down',
    NOT_POSSIBLE = 'not_possible'
}