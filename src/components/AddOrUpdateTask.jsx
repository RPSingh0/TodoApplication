import {IoMdClose} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {addNewTask, getTaskById, updateTask} from "../features/todoSlice.js";
import {v4} from "uuid";
import {closeForm} from "../features/formSlice.js";

function AddOrUpdateTask({isEditSession, taskId}) {

    const dispatch = useDispatch();
    const editTask = useSelector(getTaskById(taskId));

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        if (!data) return;
        if (!data.task || !data.description || !data.status) return;

        if (!isEditSession) {
            // attach a random uuid with the task
            data.taskId = v4();

            // dispatch the action to the redux and add the data(task) to the global state
            dispatch(addNewTask(data));
        } else {
            data.taskId = editTask.taskId;
            dispatch(updateTask(data));
        }

        // hide the form
        dispatch(closeForm());

    }

    return (
        <div className={"fixed top-0 left-0 w-dvw h-dvh backdrop-blur-md z-[100] flex items-center justify-center"}>
            <form onSubmit={handleSubmit}
                  className={"flex flex-col gap-2 bg-stone-200 px-6 py-4 rounded-lg sm:w-1/3 relative"}>
                <button type={"button"} className={"absolute top-0 right-0 px-2 py-2 rounded-lg"}
                        onClick={() => dispatch(closeForm())}><IoMdClose/></button>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor="task" className="block text-sm font-medium text-gray-900">
                        Task
                    </label>
                    <input type="text" id="task" name="task" required defaultValue={isEditSession ? editTask.task : ''}
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                        Description
                    </label>
                    <textarea id="description" rows="4" name="description" required
                              defaultValue={isEditSession ? editTask.description : ''}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                              border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Any details you would like to remember..."></textarea>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-900">
                        Task Status</label>
                    <select id="status" name="status" required defaultValue={isEditSession ? editTask.status : ''}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="blocked">Blocked</option>
                    </select>
                </div>
                <button type={"submit"}
                        className={"px-2 py-1 bg-purple-400 hover:bg-purple-500 transition-all duration-300 rounded-lg"}>
                    {isEditSession ? "Update Task" : "Add Task"}
                </button>
            </form>
        </div>
    );
}

export default AddOrUpdateTask;