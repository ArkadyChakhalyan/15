import { TKeyLine } from "../../types";

export interface IKeyProps {
    keys: TKeyLine[];
    label: number;
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