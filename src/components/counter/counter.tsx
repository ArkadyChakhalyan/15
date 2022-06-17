import './counter.scss';
import { ICounterProps } from "./types";
import { useSelector } from "react-redux";
import { IGameState } from "../../store/types";

export const Counter = ({}: ICounterProps) => {
    const count = useSelector(({ score }: IGameState) => score.moves);

    return (
        <span>
            {count}
        </span>
    );
}