import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreReducer";
import boardReducer from "./boardReducer";

export const store = configureStore({
    reducer: {
        score: scoreReducer,
        board: boardReducer
    }
});