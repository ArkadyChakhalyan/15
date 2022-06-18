import { TKey, TKeyLine } from "../../types";
import { EMPTY_KEY } from "../../constants";
import { EMoveDirection } from "../key/types";
import { getKeyCords } from "./getKeyCords";

export const getMoveDirection = (
    key: TKey,
    keys: TKeyLine[]
): EMoveDirection => {
    if (key === EMPTY_KEY) return EMoveDirection.NOT_POSSIBLE;

    const keyCords = getKeyCords(keys, key);
    const emptyKeyCords = getKeyCords(keys, EMPTY_KEY);

    if (
        emptyKeyCords[1] === keyCords[1] &&
        emptyKeyCords[0] + 1 === keyCords[0]
    ) {
        return EMoveDirection.UP
    }

    if (
        emptyKeyCords[1] === keyCords[1] &&
        emptyKeyCords[0] - 1 === keyCords[0]
    ) {
        return EMoveDirection.DOWN
    }

    if (
        emptyKeyCords[0] === keyCords[0] &&
        emptyKeyCords[1] + 1 === keyCords[1]
    ) {
        return EMoveDirection.LEFT
    }

    if (
        emptyKeyCords[0] === keyCords[0] &&
        emptyKeyCords[1] - 1 === keyCords[1]
    ) {
        return EMoveDirection.RIGHT
    }

    return EMoveDirection.NOT_POSSIBLE;
}