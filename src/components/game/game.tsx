import React from 'react';
import './game.scss';
import { CLASS_GAME } from "../../constants";
import { Body } from "../body/body";
import { Header } from "../header/header";

export const Game = () => {
    return (
        <div className={CLASS_GAME}>
            <Header />
            <Body />
        </div>
    );
}

export default Game;
