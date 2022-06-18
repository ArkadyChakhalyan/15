import './keyLine.scss';
import { CLASS_KEY_LINE, KEY_STEP } from "../../constants";
import { Key } from "../key/key";
import { IKeyLineProps } from "./types";
import { getMoveDirection } from "../helpers/getMoveDirection";
import { BOARD_PADDING } from "./constants";

export const KeyLine = ({
    keys,
    line,
    lineIdx
}: IKeyLineProps) => {
    return(
        <div className={CLASS_KEY_LINE}>
            {
                line.map((key, index) => {
                    const direction = getMoveDirection(key, keys);

                    return (
                        <Key
                            key={key + Math.random()}
                            keys={keys}
                            label={key}
                            direction={direction}
                            left={(index)* KEY_STEP + BOARD_PADDING}
                            top={lineIdx * KEY_STEP + BOARD_PADDING}
                        />
                    );
                })
            }
        </div>
    );
}