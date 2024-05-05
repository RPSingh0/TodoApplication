import Section from "../ui/Section.jsx";
import Task from "../ui/Task.jsx";
import {useSelector} from "react-redux";
import {getBlockedTasks, getCompletedTasks, getInProgressTasks, getNewTasks} from "../features/todoSlice.js";

function Tasks() {

    const newTask = useSelector(getNewTasks);
    const inProgressTask = useSelector(getInProgressTasks);
    const blockedTask = useSelector(getBlockedTasks);
    const completedTask = useSelector(getCompletedTasks);

    if (newTask.length === 0 && inProgressTask.length === 0 && blockedTask.length === 0 && completedTask.length === 0) {
        return (
            <div className={"text-xl absolute top-1/2"}>
                Start by adding a task...
            </div>
        );
    }

    return (
        <Section heading={"Tasks"}>
            {newTask.length > 0 &&
                <div className={"flex flex-col gap-2"}>
                    {newTask.map(task => <Task task={task} key={task.taskId}>{task.description}</Task>)}
                </div>
            }
            {inProgressTask.length > 0 &&
                <div className={"flex flex-col gap-2"}>
                    {inProgressTask.map(task => <Task task={task} key={task.taskId}>{task.description}</Task>)}
                </div>
            }
            {blockedTask.length > 0 &&
                <div className={"flex flex-col gap-2"}>
                    {blockedTask.map(task => <Task task={task} key={task.taskId}>{task.description}</Task>)}
                </div>
            }
            {completedTask.length > 0 &&
                <div className={"flex flex-col gap-2"}>
                    {completedTask.map(task => <Task task={task} key={task.taskId}>{task.description}</Task>)}
                </div>
            }
        </Section>
    );
}

export default Tasks;