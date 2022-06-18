import { TKey, TKeyLine } from "../../types";
import { EMPTY_KEY } from "../../constants";
import { getKeyCords } from "./getKeyCords";

export const getKeysAfterMove = (
    keys: TKeyLine[],
    key: TKey
): TKeyLine[] => {
    const keyCords = getKeyCords(keys, key);
    const emptyKeyCords = getKeyCords(keys, EMPTY_KEY);

    const newKeys = changeKey(keys, keyCords, EMPTY_KEY);
    return changeKey(newKeys, emptyKeyCords, key);
}

const changeKey = (
    keys: TKeyLine[],
    keyCords: number[],
    newKey: TKey
): TKeyLine[] => {
    const keyLineIdx = keyCords[0];
    const keyIdx = keyCords[1];

    const newLine = [
        ...[...keys[keyLineIdx]].splice(0, keyIdx),
        newKey,
        ...[...keys[keyLineIdx]].splice(keyIdx + 1)
    ];

    return [
        ...[...keys].splice(0, keyLineIdx),
        newLine,
        ...[...keys].splice(keyLineIdx + 1),
    ];
}