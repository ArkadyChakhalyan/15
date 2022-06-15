import './body.scss';
import { CLASS_BODY } from "../../constants";
import { Key } from "../key/key";
import { getNewKeys } from "../helpers/getNewKeys";

export const Body = () => {
    return(
        <div className={CLASS_BODY}>
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