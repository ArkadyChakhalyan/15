import { TTile, TTileRow } from "../../types";
import { checkIfTilesCompleted } from "./checkIfTilesCompleted";
import { COMPLETED_TILES_IN_ARRAY } from "../../constants";
import { setTilesInGrid } from "./setTiresInGrid";

export const getNewTiles = (): TTileRow[] => {
    let tiles: TTile[] = [];

    const shuffledTiles = shuffle(COMPLETED_TILES_IN_ARRAY);

    if (!checkIfTilesCompleted(shuffledTiles)) {
        tiles = shuffledTiles;
    } else {
        getNewTiles();
    }

    return setTilesInGrid(tiles);
}

const shuffle = (
    tiles: TTile[]
): TTile[] => {
    return tiles
        .map(tile => ({ tile, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ tile }) => tile);
}