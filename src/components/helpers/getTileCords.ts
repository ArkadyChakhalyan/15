import { TTile, TTileRow } from "../../types";

export const getTileCords = (
    tiles: TTileRow[],
    tile: TTile
) => {
    let tileCords: number[] = [];

    for (let i = 0; i < tiles.length; i++) {
        for (let j = 0; j < tiles[i].length; j++) {
            if (tiles[i][j] === tile) {
                tileCords = [i, j];
            }
        }
    }

    return tileCords;
}