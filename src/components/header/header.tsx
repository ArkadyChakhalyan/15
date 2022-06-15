import './header.scss';
import { CLASS_HEADER } from "../../constants";
import { Timer } from "../timer/timer";
import { Counter } from "../counter/counter";

export const Header = () => {
    return (
        <div className={CLASS_HEADER}>
            <Timer />
            <Counter />
        </div>
    );
}