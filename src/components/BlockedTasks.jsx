import {useSelector} from "react-redux";
import Section from "../ui/Section.jsx";
import Task from "../ui/Task.jsx";
import {getBlockedTasks} from "../features/todoSlice.js";

function BlockedTasks() {
    const blockedTasks = useSelector(getBlockedTasks);

    return (
        <Section heading={"Blocked"} type={'blockedTask'}>
            {blockedTasks?.map(task => <Task heading={task.task} key={task.taskId}>{task.description}</Task>)}
        </Section>
    );
}

export default BlockedTasks;