import './board.scss';
import { CLASS_BOARD } from "../../constants";
import { Key } from "../key/key";
import { getNewKeys } from "../helpers/getNewKeys";

export const Board = () => {
    return(
        <div className={CLASS_BOARD}>
            {
                getNewKeys().map((key) => {
                    return (
                        <Key label={key}/>
                    );
                })
            }
        </div>
    );
}