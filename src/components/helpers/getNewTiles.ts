import { TTile, TTileRow } from "../../types";
import { checkIfTilesCompleted } from "./checkIfTilesCompleted";
import { COMPLETED_TILES_IN_ARRAY } from "../../constants";

export const getNewTiles = (): TTileRow[] => {
    let tiles: TTile[] = [];

    const shuffledtiles = shuffle(COMPLETED_TILES_IN_ARRAY);

    if (!checkIfTilesCompleted(shuffledtiles)) {
        tiles = shuffledtiles;
    } else {
        getNewTiles();
    }

    return settilesInGrid(tiles);
}

const shuffle = (
    tiles: TTile[]
): TTile[] => {
    return tiles
        .map(tile => ({ tile, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ tile }) => tile);
}

const settilesInGrid = (
    tiles: TTile[]
): TTileRow[] => {
    const tilesInGrid: TTileRow[] = [];
    const _tiles: TTile[] = [...tiles];

    for (let i = 0; i < 4; i++) {
        const line: TTile[] = [];

        for (let j = 0; j < 4; j++) {
            line.push(_tiles.shift() as TTile);
        }

        tilesInGrid.push(line);
    }

    return tilesInGrid;
}