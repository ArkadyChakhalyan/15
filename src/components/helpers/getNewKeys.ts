import { TKey, TKeyLine } from "../../types";
import { checkIfKeysCompleted } from "./checkIfKeysCompleted";

export const getNewKeys = (): TKeyLine[] => {
    let keys: TKey[] = [];

    for (let i = 0; i <= 15; i++) {
        keys.push(i);
    }

    const shuffledKeys = shuffle(keys);

    if (!checkIfKeysCompleted(shuffledKeys)) {
        keys = shuffledKeys;
    } else {
        getNewKeys();
    }

    return setKeysInGrid(keys);
}

const shuffle = (
    keys: TKey[]
): TKey[] => {
    return keys
        .map(key => ({ key, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ key }) => key);
}

const setKeysInGrid = (
    keys: TKey[]
): TKeyLine[] => {
    const keysInGrid: TKeyLine[] = [];
    const _keys: TKey[] = [...keys];

    for (let i = 0; i < 4; i++) {
        const line: TKey[] = [];

        for (let j = 0; j < 4; j++) {
            line.push(_keys.shift() as TKey);
        }

        keysInGrid.push(line);
    }

    return keysInGrid;
}