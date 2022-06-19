import './board.scss';
import { CLASS_BOARD } from "../../constants";
import { IBoardProps } from "./types";
import { TileRow } from "../tileRow/tileRow";

export const Board = ({
    tiles,
    isTemplate
}: IBoardProps) => {
    const classTemplate = CLASS_BOARD + '--template';

    return(
        <div className={`
                ${CLASS_BOARD}
                ${isTemplate ? classTemplate : ''}
            `}
        >
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