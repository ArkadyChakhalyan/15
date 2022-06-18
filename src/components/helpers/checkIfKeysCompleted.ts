import { TKeyLine } from "../../types";
import { EMPTY_KEY } from "../../constants";

export const checkIfKeysCompleted = (
    keys: TKeyLine,
): boolean => {
    let completedKeys = '';

    for (let i = 1; i < 15; i++) {
        completedKeys += i;
    }

    return keysToResult(keys).includes(completedKeys);
}

const keysToResult = (
    keys: TKeyLine
): string => {
    return keys
        .filter((key) => key !== EMPTY_KEY)
        .join('');
}

