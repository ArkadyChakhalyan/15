import './header.scss';
import { CLASS_HEADER } from "../../constants";
import { Timer } from "../timer/timer";
import { Counter } from "../counter/counter";
import { IHeaderProps } from "./types";

export const Header = ({}: IHeaderProps) => {
    return (
        <div className={CLASS_HEADER}>
            <Timer />
            <Counter />
        </div>
    );
}