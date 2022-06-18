import { TKey, TKeyLine } from "../../types";

export const getKeyCords = (
    keys: TKeyLine[],
    key: TKey
) => {
    let keyCords: number[] = [];

    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < keys[i].length; j++) {
            if (keys[i][j] === key) {
                keyCords = [i, j];
            }
        }
    }

    return keyCords;
}