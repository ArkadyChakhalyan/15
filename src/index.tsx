import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Game from './components/game/game';
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Game />
        </Provider>
    </React.StrictMode>
);

