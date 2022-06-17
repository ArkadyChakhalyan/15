import './board.scss';
import { CLASS_BOARD } from "../../constants";
import { Key } from "../key/key";
import { IBoardProps } from "./types";

export const Board = ({
    keys
}: IBoardProps) => {
    return(
        <div className={CLASS_BOARD}>
            {
                keys.map((key) => {
                    return (
                        <Key
                            key={key}
                            label={key}
                        />
                    );
                })
            }
        </div>
    );
}