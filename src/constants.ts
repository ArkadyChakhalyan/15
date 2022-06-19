import { TTile } from "./types";

export const CLASS_GAME = 'game';
export const CLASS_BOARD = 'board';
export const CLASS_TILE_ROW = 'tile-row';
export const CLASS_HEADER = 'header';
export const CLASS_FOOTER = 'footer';
export const CLASS_BUTTON = 'button';
export const CLASS_TILE = 'tile';
export const CLASS_RULES = 'rules';

export const EMPTY_TILE = 0;

const tileWidth = 56;
const margin = 8;

export const TILE_STEP = tileWidth + margin;

export const COMPLETED_TILES_IN_ARRAY: TTile[] = [];

for (let i = 0; i <= 15; i++) {
    COMPLETED_TILES_IN_ARRAY.push(i);
}