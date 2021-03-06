import React, { useEffect, useState } from 'react';
import './game.scss';
import { CLASS_GAME } from "../../constants";
import { Board } from "../board/board";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { getNewTiles } from "../helpers/getNewTiles";
import { setBlockMoves, setInitialTilesAC, setIsBoardCompleted, setTilesAC } from "../../store/boardReducer";
import { IGameState } from "../../store/types";
import { setMovesAC, setTimeAC } from "../../store/scoreReducer";
import { checkIfTilesCompleted } from "../helpers/checkIfTilesCompleted";
import { getTilesInArray } from "../helpers/getTilesInArray";
import { Rules } from "../rules/rules";
import { Congrats } from "../congrats/congrats";

export const Game = () => {
    const dispatch = useDispatch();
    const initialTiles = useSelector(({ board }: IGameState) => board.initialTiles);
    const tiles = useSelector(({ board }: IGameState) => board.tiles);

    const [isShow, setShow] = useState(false);

    const refreshScore = () => {
        dispatch(setTimeAC({ time: 0 }));
        dispatch(setMovesAC({ moves: 0 }));
        dispatch(setIsBoardCompleted({ isBoardCompleted: false }));
    };

    const onStart = () => {
        const tiles = getNewTiles();
        dispatch(setInitialTilesAC({ tiles }));
        dispatch(setTilesAC({ tiles }));
        refreshScore();
    };

    const onRestart = () => {
        dispatch(setTilesAC({ tiles: initialTiles }));
        refreshScore();
    };

    useEffect(() => {
        onStart();
    }, []);

    useEffect(() => {
        if (checkIfTilesCompleted(getTilesInArray(tiles))) {
            dispatch(setBlockMoves({ blockMoves: true }));
            dispatch(setIsBoardCompleted({ isBoardCompleted: true }));
            setShow(true);

            setTimeout(() => setShow(false), 6000); //congrats animation duration
        }
    }, [tiles]);

    return (
        <div className={CLASS_GAME}>
            <Header />
            <Board tiles={tiles} />
            <Footer
                isDisabled={!initialTiles}
                onRestart={onRestart}
                onStart={onStart}
            />
            <Rules />
            {isShow &&
                <Congrats />
            }
        </div>
    );
}

export default Game;
