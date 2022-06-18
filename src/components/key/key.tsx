import './key.scss';
import { CLASS_KEY, KEY_STEP } from "../../constants";
import { EMoveDirection, IKeyProps } from "./types";
import { useEffect, useRef, useState } from "react";
import { getKeysAfterMove } from "../helpers/getKeysAfterMove";
import { useDispatch, useSelector } from "react-redux";
import { setBlockMoves, setKeysAC } from "../../store/boardReducer";
import { IGameState } from "../../store/types";
import { setMovesAC } from "../../store/scoreReducer";

export const Key = ({
    keys,
    label,
    direction,
    left,
    top,
}: IKeyProps) => {
    const dispatch = useDispatch();

    const blockMove = useSelector(({ board }: IGameState) => board.blockMoves);
    const moves = useSelector(({ score }: IGameState) => score.moves);

    const classEmpty = CLASS_KEY + '--empty';
    const classShow = CLASS_KEY + '--show';
    const classVisible = CLASS_KEY + '--visible';

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
            dispatch(setKeysAC({ keys: getKeysAfterMove(keys, label) }));

            if (ref && ref.current) {
                const key = ref.current as HTMLElement;
                key.style.margin = '';
            }

            dispatch(setBlockMoves({ blockMoves: false }));
        }, 250); // 0.3s move animation

        switch (direction) {
            case EMoveDirection.DOWN: {
                if (ref && ref.current) {
                    const key = ref.current as HTMLElement;
                    key.style.marginTop = `${KEY_STEP}px`;
                }
                return;
            }
            case EMoveDirection.UP: {
                if (ref && ref.current) {
                    const key = ref.current as HTMLElement;
                    key.style.marginTop = `${-KEY_STEP}px`;
                }
                return;
            }
            case EMoveDirection.LEFT: {
                if (ref && ref.current) {
                    const key = ref.current as HTMLElement;
                    key.style.marginLeft = `${-KEY_STEP}px`;
                }
                return;
            }
            case EMoveDirection.RIGHT: {
                if (ref && ref.current) {
                    const key = ref.current as HTMLElement;
                    key.style.marginLeft = `${KEY_STEP}px`;
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
                ${CLASS_KEY}
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