import { TTile, TTileRow } from "../../types";

export const setTilesInGrid = (
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