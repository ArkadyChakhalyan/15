import { TKey } from "../../types";

export const getNewKeys = (): TKey[] => {
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

    return shuffledKeys;
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
        .filter((key) => key !== 0)
        .join('');
}