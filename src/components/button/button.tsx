import { IButtonProps } from "./types";
import { CLASS_BUTTON } from "../../constants";
import './button.scss';

export const Button = ({
    disabled = false,
    label,
    onClick
}: IButtonProps) => {
    return (
        <button
            className={CLASS_BUTTON}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}