import {LuListTodo} from "react-icons/lu";

function Header() {
    return (
        <header className={"flex gap-2 items-center justify-center text-2xl w-full py-2 bg-sky-400 shadow-2xl"}>
            <LuListTodo/>
            TODO
        </header>
    );
}

export default Header;