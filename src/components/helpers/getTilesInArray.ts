import { TTileRow } from "../../types";

export const getTilesInArray = (
    tiles: TTileRow[]
): TTileRow => {
    const result: TTileRow = [];

    tiles.forEach((tileRow) => {
        tileRow.forEach((tile) => result.push(tile));
    })

    return result;
}