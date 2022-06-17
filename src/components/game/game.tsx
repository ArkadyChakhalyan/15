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

export const Game = () => {
    const dispatch = useDispatch();
    const initialKeys = useSelector(({ board }: IGameState) => board.initialKeys) || [];

    const onStart = () => {
        const keys = getNewKeys();
        dispatch(setInitialKeysAC({ keys }));
        dispatch(setKeysAC({ keys }));
    };

    const onRestart = () => {
        dispatch(setKeysAC({ keys: initialKeys }));
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
