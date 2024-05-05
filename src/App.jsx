import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AddOrUpdateTask from "./components/AddOrUpdateTask.jsx";
import Button from "./components/Button.jsx";
import Tasks from "./components/Tasks.jsx";
import {useDispatch, useSelector} from "react-redux";
import {openNewForm} from "./features/formSlice.js";

function App() {

    const dispatch = useDispatch();
    const {isOpen, formType} = useSelector(state => state.form);

    return (
        <div className={"grid grid-rows-[auto,1fr,auto] h-dvh w-screen relative"}>
            <Header/>
            <main className={"w-full flex flex-col gap-4 items-center justify-start px-4 py-4 overflow-auto relative"}>
                {isOpen && formType === 'new' && <AddOrUpdateTask isEditSession={false}/>}
                <Tasks/>
                <div
                    className={"absolute sm:bottom-4 sm:right-5 bottom-3 right-3 rounded-lg bg-purple-500 px-2 py-2 z-10"}>
                    <Button onClick={() => dispatch(openNewForm())}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;