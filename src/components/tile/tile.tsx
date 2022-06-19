import './tile.scss';
import { CLASS_TILE, TILE_STEP } from "../../constants";
import { EMoveDirection, ITileProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { getTilesAfterMove } from "../helpers/getTilesAfterMove";
import { useDispatch, useSelector } from "react-redux";
import { setBlockMoves, setTilesAC } from "../../store/boardReducer";
import { IGameState } from "../../store/types";
import { setMovesAC } from "../../store/scoreReducer";

export const Tile = ({
    tiles,
    label,
    direction,
    left,
    top
}: ITileProps) => {
    const dispatch = useDispatch();

    const blockMove = useSelector(({ board }: IGameState) => board.blockMoves);
    const moves = useSelector(({ score }: IGameState) => score.moves);

    const classEmpty = CLASS_TILE + '--empty';
    const classShow = CLASS_TILE + '--show';
    const classVisible = CLASS_TILE + '--visible';

    const uniqueNumber = Math.round(Math.random() * 500);
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    const onClick = () => {
        if (
            blockMove ||
            direction === EMoveDirection.NOT_POSSIBLE
        ) {
            return;
        }

        dispatch(setBlockMoves({ blockMoves: true }));
        dispatch(setMovesAC({ moves: moves + 1 }));

        setTimeout(() => {
            dispatch(setTilesAC({ tiles: getTilesAfterMove(tiles, label) }));

            if (ref && ref.current) {
                const tile = ref.current as HTMLElement;
                tile.style.margin = '';
            }

            dispatch(setBlockMoves({ blockMoves: false }));
        }, 250); // 0.3s move animation

        switch (direction) {
            case EMoveDirection.DOWN: {
                if (ref && ref.current) {
                    const tile = ref.current as HTMLElement;
                    tile.style.marginTop = `${TILE_STEP}px`;
                }
                return;
            }
            case EMoveDirection.UP: {
                if (ref && ref.current) {
                    const tile = ref.current as HTMLElement;
                    tile.style.marginTop = `${-TILE_STEP}px`;
                }
                return;
            }
            case EMoveDirection.LEFT: {
                if (ref && ref.current) {
                    const tile = ref.current as HTMLElement;
                    tile.style.marginLeft = `${-TILE_STEP}px`;
                }
                return;
            }
            case EMoveDirection.RIGHT: {
                if (ref && ref.current) {
                    const tile = ref.current as HTMLElement;
                    tile.style.marginLeft = `${TILE_STEP}px`;
                }
                return;
            }
        }
    };

    useEffect(() => {
        if (moves === 0) {
            setShow(true);
        }
    }, []);

    return (
        <div
            className={`
                ${CLASS_TILE}
                ${show ? classShow : classVisible}
                ${!label ? classEmpty : ''}
            `}
            ref={ref}
            style={{
                left,
                top,
                zIndex: uniqueNumber,
                animationDelay: uniqueNumber + 'ms'
            }}
            onClick={onClick}
        >
            {label}
        </div>
    );
}