import { TKeyLine } from "../../types";

export const getKeysInArray = (
    keys: TKeyLine[]
): TKeyLine => {
    const result: TKeyLine = [];

    keys.forEach((keyLine) => {
        keyLine.forEach((key) => result.push(key));
    })

    return result;
}