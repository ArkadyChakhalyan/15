import './footer.scss';
import { Button } from "../button/button";
import { CLASS_FOOTER } from "../../constants";
import { RESTART_BUTTON_LABEL, START_BUTTON_LABEL } from "./constants";

export const Footer = () => {
    return (
        <div className={CLASS_FOOTER}>
            <Button
                disabled={false}
                label={RESTART_BUTTON_LABEL}
                onClick={() => {}} />
            <Button
                label={START_BUTTON_LABEL}
                onClick={() => {}} />
        </div>
    );
}