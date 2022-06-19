import { TTileRow } from "../../types";
import { COMPLETED_TILES_IN_ARRAY, EMPTY_TILE } from "../../constants";

export const checkIfTilesCompleted = (
    tiles: TTileRow,
): boolean => {
    const completedTiles = COMPLETED_TILES_IN_ARRAY
        .filter((tile => tile !== EMPTY_TILE))
        .join('');

    return tilesToResult(tiles).includes(completedTiles);
}

const tilesToResult = (
    tiles: TTileRow
): string => {
    return tiles
        .filter((tile) => tile !== EMPTY_TILE)
        .join('');
}

