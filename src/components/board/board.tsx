import './board.scss';
import { CLASS_BOARD } from "../../constants";
import { IBoardProps } from "./types";
import { KeyLine } from "../keyLine/keyLine";

export const Board = ({
    keys
}: IBoardProps) => {
    return(
        <div className={CLASS_BOARD}>
            {
                keys.map((line, index) => {
                    return (
                        <KeyLine
                            key={index}
                            keys={keys}
                            line={line}
                            lineIdx={index}
                        />
                    );
                })
            }
        </div>
    );
}