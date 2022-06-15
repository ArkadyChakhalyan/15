import React from 'react';
import './game.scss';
import { CLASS_GAME } from "../../constants";
import { Board } from "../board/board";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Game = () => {
    return (
        <div className={CLASS_GAME}>
            <Header />
            <Board />
            <Footer />
        </div>
    );
}

export default Game;
