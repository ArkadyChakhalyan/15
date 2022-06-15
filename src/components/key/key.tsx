import './key.scss';
import { CLASS_KEY } from "../../constants";
import { IKeyProps } from "./types";

export const Key = ({
    label
}: IKeyProps) => {
    const classEmpty = CLASS_KEY + '--empty';
    return (
        <div
            className={`
                ${CLASS_KEY}
                ${!label ? classEmpty : ''}
            `}
        >
            {label}
        </div>
    );
}