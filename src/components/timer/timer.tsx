import './timer.scss';
import { useEffect, useState } from "react";
import { getTwoDigitTime } from "../helpers/getTwoDigitTime";
import { ITimerProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { IGameState } from "../../store/types";
import { setTimeAC } from "../../store/scoreReducer";

export const Timer = ({}: ITimerProps) => {
    const dispatch = useDispatch();

    const time = useSelector(({ score }: IGameState) => score.time);
    const isBoardCompleted = useSelector(({ board }: IGameState) => board.isBoardCompleted);

    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, _setSeconds] = useState(0);

    const setSeconds = (value: number) => {
        seconds = value;
        _setSeconds(value);
    }

    useEffect(() => {
        if (time === 0) {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        }
    }, [time]);

    useEffect(() => {
        const timer = setInterval(() => {

            if (seconds < 59) {
                setSeconds(seconds + 1);
            } else {
                setSeconds(0);
                if (minutes < 59) {
                    setMinutes(minutes + 1);
                } else {
                    setMinutes(0);
                    setHours(hours + 1);
                }
            }

            dispatch(setTimeAC({ time: time + 1}));
        }, 1000);

        if (isBoardCompleted) {
            clearTimeout(timer);
        }

        return () => clearTimeout(timer);
    }, [seconds, minutes, hours]);

    return (
        <span>
            {getTwoDigitTime(hours)}:{getTwoDigitTime(minutes)}:{getTwoDigitTime(seconds)}
        </span>
    );
}