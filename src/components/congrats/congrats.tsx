import './congrats.scss';
import { CONGRATULATION_TILES } from "./constants";
import { TileRow } from "../tileRow/tileRow";
import { CLASS_CONGRATS } from "../../constants";

export const Congrats = () => {
    const classTiles = CLASS_CONGRATS + '__tiles';

    return(
        <div
            className={CLASS_CONGRATS}
        >
            <div className={classTiles}>
                {
                    CONGRATULATION_TILES.map((row, index) => {
                        return (
                            <TileRow
                                key={index}
                                row={row}
                                tiles={CONGRATULATION_TILES}
                                lineIdx={index}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}