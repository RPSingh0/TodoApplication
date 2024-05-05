import {RiMenuAddLine} from "react-icons/ri";

function Button({onClick}) {
    return (
        <button className={"flex items-center"} onClick={onClick}><RiMenuAddLine/></button>
    );
}

export default Button;