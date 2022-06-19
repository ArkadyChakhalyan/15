import { TTile, TTileRow } from "../../types";
import { EMPTY_TILE } from "../../constants";
import { getTileCords } from "./getTileCords";

export const getTilesAfterMove = (
    tiles: TTileRow[],
    tile: TTile
): TTileRow[] => {
    const tileCords = getTileCords(tiles, tile);
    const emptytileCords = getTileCords(tiles, EMPTY_TILE);

    const newtiles = changetile(tiles, tileCords, EMPTY_TILE);
    return changetile(newtiles, emptytileCords, tile);
}

const changetile = (
    tiles: TTileRow[],
    tileCords: number[],
    newtile: TTile
): TTileRow[] => {
    const tileLineIdx = tileCords[0];
    const tileIdx = tileCords[1];

    const newLine = [
        ...[...tiles[tileLineIdx]].splice(0, tileIdx),
        newtile,
        ...[...tiles[tileLineIdx]].splice(tileIdx + 1)
    ];

    return [
        ...[...tiles].splice(0, tileLineIdx),
        newLine,
        ...[...tiles].splice(tileLineIdx + 1),
    ];
}