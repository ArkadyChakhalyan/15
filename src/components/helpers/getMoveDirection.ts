import { TTile, TTileRow } from "../../types";
import { EMPTY_TILE } from "../../constants";
import { EMoveDirection } from "../tile/types";
import { getTileCords } from "./getTileCords";

export const getMoveDirection = (
    tile: TTile,
    tiles: TTileRow[]
): EMoveDirection => {
    if (tile === EMPTY_TILE) return EMoveDirection.NOT_POSSIBLE;

    const tileCords = getTileCords(tiles, tile);
    const emptyTileCords = getTileCords(tiles, EMPTY_TILE);

    if (
        emptyTileCords[1] === tileCords[1] &&
        emptyTileCords[0] + 1 === tileCords[0]
    ) {
        return EMoveDirection.UP
    }

    if (
        emptyTileCords[1] === tileCords[1] &&
        emptyTileCords[0] - 1 === tileCords[0]
    ) {
        return EMoveDirection.DOWN
    }

    if (
        emptyTileCords[0] === tileCords[0] &&
        emptyTileCords[1] + 1 === tileCords[1]
    ) {
        return EMoveDirection.LEFT
    }

    if (
        emptyTileCords[0] === tileCords[0] &&
        emptyTileCords[1] - 1 === tileCords[1]
    ) {
        return EMoveDirection.RIGHT
    }

    return EMoveDirection.NOT_POSSIBLE;
}