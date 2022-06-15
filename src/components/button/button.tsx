import { IButtonProps } from "./types";
import { CLASS_BUTTON } from "../../constants";
import './button.scss';
import { useRef } from "react";

export const Button = ({
    disabled = false,
    label,
    onClick
}: IButtonProps) => {
    const ref = useRef(null);

    const handleClick = () => {
        onClick();
        if (ref && ref.current) {
            const button = ref.current as HTMLButtonElement;
            button.blur();
        }
    };

    return (
        <button
            className={CLASS_BUTTON}
            ref={ref}
            onClick={handleClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}