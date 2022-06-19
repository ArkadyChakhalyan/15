import './board.scss';
import { CLASS_BOARD } from "../../constants";
import { IBoardProps } from "./types";
import { TileRow } from "../tileRow/tileRow";

export const Board = ({
    tiles
}: IBoardProps) => {
    return(
        <div className={CLASS_BOARD}>
            {
                tiles.map((row, index) => {
                    return (
                        <TileRow
                            key={index}
                            tiles={tiles}
                            row={row}
                            lineIdx={index}
                        />
                    );
                })
            }
        </div>
    );
}