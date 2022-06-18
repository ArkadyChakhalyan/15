import { TKey, TKeyLine } from "../../types";
import { EMPTY_KEY } from "../../constants";

export const getNewKeys = (): TKeyLine[] => {
    let keys: TKey[] = [];

    for (let i = 0; i <= 15; i++) {
        keys.push(i);
    }

    const shuffledKeys = shuffle(keys);

    if (!checkIfCompleted(shuffledKeys, keys)) {
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

const checkIfCompleted = (
    keys: TKey[],
    completedKeys: TKey[]
): boolean => {
    return keysToResult(keys).includes(keysToResult(completedKeys));
}

const keysToResult = (
    keys: TKey[]
): string => {
    return keys
        .filter((key) => key !== EMPTY_KEY)
        .join('');
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