import './footer.scss';
import { Button } from "../button/button";
import { CLASS_FOOTER } from "../../constants";
import { RESTART_BUTTON_LABEL, START_BUTTON_LABEL } from "./constants";
import { IFooterProps } from "./types";

export const Footer = ({
    isDisabled,
    onRestart,
    onStart
}: IFooterProps) => {
    return (
        <div className={CLASS_FOOTER}>
            <Button
                disabled={isDisabled}
                label={RESTART_BUTTON_LABEL}
                onClick={onRestart} />
            <Button
                label={START_BUTTON_LABEL}
                onClick={onStart} />
        </div>
    );
}