import './rules.scss';
import { CLASS_RULES } from "../../constants";
import { RULES_TEXT, RULES_TITLE, TOOLTIP_TEXT } from "./constants";
import { useEffect, useRef, useState } from "react";

export const Rules = () => {
    const classContainer = CLASS_RULES + '__container';
    const classTooltip = CLASS_RULES + '__tooltip';
    const classIcon = CLASS_RULES + '__icon';
    const classLine = classIcon + '__line';
    const classDot = classIcon + '__dot';
    const classTitle = CLASS_RULES + '__title';
    const classVisible = CLASS_RULES + '--visible';

    const [showTooltip, setShowTooltip] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const ref = useRef(null);

    const onToggleTooltip = (value: boolean) => {
        setTimeout(() => {
            setShowTooltip(value);
        }, 300);
    };

    useEffect(() => {
        if (showRules && ref && ref.current) {
            const rules = ref.current as HTMLElement;
            rules.focus();
        }
    }, [showRules]);

    return(
        <div className={classContainer}>
            {showTooltip &&
                <span className={classTooltip}>
                    {TOOLTIP_TEXT}
                </span>
            }
            <div
                className={classIcon}
                onMouseEnter={() => onToggleTooltip(true)}
                onMouseLeave={() => onToggleTooltip(false)}
                onClick={() => setShowRules(!showRules)}
            >
                <div className={classDot} />
                <div className={classLine} />
            </div>
            <div
                className={`
                    ${CLASS_RULES}
                    ${showRules ? classVisible : ''}
                `}
                tabIndex={1}
                ref={ref}
                onBlur={() => setShowRules(false)}
            >
                <span className={classTitle}>
                    {RULES_TITLE}
                </span>
                {RULES_TEXT}
            </div>
        </div>
    );
}