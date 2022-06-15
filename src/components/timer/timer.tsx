import './timer.scss';
import { useEffect, useState } from "react";
import { TKey } from "../../types";
import { getTwoDigitTime } from "../helpers/getTwoDigitTime";

export const Timer = () => {
    const board: TKey[] = [];

    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, _setSeconds] = useState(0);

    const setSeconds = (value: number) => {
        seconds = value;
        _setSeconds(value);
    }

    useEffect(() => {
        if (
            seconds !== 0 &&
            minutes !== 0 &&
            hours !== 0
        ) {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
        }
    }, [board]);

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
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds, minutes, hours]);

    return (
        <span>
            {getTwoDigitTime(hours)}:{getTwoDigitTime(minutes)}:{getTwoDigitTime(seconds)}
        </span>
    );
}