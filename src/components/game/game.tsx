import React, { useEffect } from 'react';
import './game.scss';
import { CLASS_GAME } from "../../constants";
import { Board } from "../board/board";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { getNewKeys } from "../helpers/getNewKeys";
import { setBlockMoves, setInitialKeysAC, setIsBoardCompleted, setKeysAC } from "../../store/boardReducer";
import { TKeyLine } from "../../types";
import { IGameState } from "../../store/types";
import { setMovesAC, setTimeAC } from "../../store/scoreReducer";
import { checkIfKeysCompleted } from "../helpers/checkIfKeysCompleted";
import { getKeysInArray } from "../helpers/getKeysInArray";

export const Game = () => {
    const dispatch = useDispatch();
    const initialKeys = useSelector(({ board }: IGameState) => board.initialKeys);
    const keys: TKeyLine[] = useSelector(({ board }: IGameState) => board.keys);

    const refreshScore = () => {
        dispatch(setTimeAC({ time: 0 }));
        dispatch(setMovesAC({ moves: 0 }));
        dispatch(setIsBoardCompleted({ isBoardCompleted: false }));
    };

    const onStart = () => {
        const keys = getNewKeys();
        dispatch(setInitialKeysAC({ keys }));
        dispatch(setKeysAC({ keys }));
        refreshScore();
    };

    const onRestart = () => {
        dispatch(setKeysAC({ keys: initialKeys }));
        refreshScore();
    };

    useEffect(() => {
        onStart();
    }, []);

    useEffect(() => {
        if (checkIfKeysCompleted(getKeysInArray(keys))) {
            dispatch(setBlockMoves({ blockMoves: true }));
            dispatch(setIsBoardCompleted({ isBoardCompleted: true }));
        }
    }, [keys]);

    return (
        <div className={CLASS_GAME}>
            <Header />
            <Board keys={keys} />
            <Footer
                isDisabled={!initialKeys}
                onRestart={onRestart}
                onStart={onStart}
            />
        </div>
    );
}

export default Game;
