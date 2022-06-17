import React, { useEffect } from 'react';
import './game.scss';
import { CLASS_GAME } from "../../constants";
import { Board } from "../board/board";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { getNewKeys } from "../helpers/getNewKeys";
import { setInitialKeysAC, setKeysAC } from "../../store/boardReducer";
import { TKey } from "../../types";
import { IGameState } from "../../store/types";
import { setMovesAC, setTimeAC } from "../../store/scoreReducer";

export const Game = () => {
    const dispatch = useDispatch();
    const initialKeys = useSelector(({ board }: IGameState) => board.initialKeys);

    const refreshScore = () => {
        dispatch(setTimeAC({ time: 0 }));
        dispatch(setMovesAC({ moves: 0 }));
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

    const keys: TKey[] = useSelector(({ board }: IGameState) => board.keys);

    useEffect(() => {
        onStart();
    }, []);

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
