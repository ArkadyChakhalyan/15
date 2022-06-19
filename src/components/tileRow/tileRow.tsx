import './tileRow.scss';
import { CLASS_TILE_ROW, TILE_STEP } from "../../constants";
import { Tile } from "../tile/tile";
import { ITileRowProps } from "./types";
import { getMoveDirection } from "../helpers/getMoveDirection";
import { BOARD_PADDING } from "./constants";

export const TileRow = ({
    tiles,
    row,
    lineIdx
}: ITileRowProps) => {
    return(
        <div className={CLASS_TILE_ROW}>
            {
                row.map((tile, index) => {
                    const direction = getMoveDirection(tile, tiles);

                    return (
                        <Tile
                            key={tile + Math.random()}
                            tiles={tiles}
                            label={tile}
                            direction={direction}
                            left={(index)* TILE_STEP + BOARD_PADDING}
                            top={lineIdx * TILE_STEP + BOARD_PADDING}
                        />
                    );
                })
            }
        </div>
    );
}