import {FaRegEdit} from "react-icons/fa";
import {MdOutlineDeleteOutline} from "react-icons/md";
import {deleteTask} from "../features/todoSlice.js";
import {useDispatch, useSelector} from "react-redux";
import AddOrUpdateTask from "../components/AddOrUpdateTask.jsx";
import {openEditForm} from "../features/formSlice.js";

function Task({task}) {

    const taskType = {
        'new': ' border-sky-300',
        'in-progress': ' border-teal-400',
        'blocked': ' border-red-400',
        'completed': ' border-green-400'
    };

    const dispatch = useDispatch();
    const {isOpen, formType, editObject} = useSelector(state => state.form);

    function handleDeleteTask(id) {
        dispatch(deleteTask(id));
    }

    function handleEditTask(id) {
        dispatch(openEditForm(task.taskId));
    }

    return (
        <div
            className={"flex flex-col gap-1 border-solid border-2 rounded-lg  px-4 py-2" + taskType[task.status]}>
            <div className={"grid grid-cols-[auto,1fr,auto] gap-y-2 items-center"}>
                <div className={"text-stone-800"}>{task.task.toUpperCase()}</div>
                <div className={"flex flex-row gap-4 items-center justify-end"}>
                    <div className={"text-sm"}>{task.status.toUpperCase()}</div>
                    <button onClick={() => handleEditTask(task.taskId)}><FaRegEdit/></button>
                    <button onClick={() => handleDeleteTask(task.taskId)}><MdOutlineDeleteOutline/></button>
                </div>
                <div className={"col-span-full text-stone-600"}>
                    {task.description}
                </div>
                {isOpen && formType === 'edit' && editObject === task.taskId &&
                    <AddOrUpdateTask isEditSession={true} taskId={task.taskId}/>}
            </div>
        </div>
    );
}

export default Task;