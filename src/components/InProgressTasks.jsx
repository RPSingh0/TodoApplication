import Section from "../ui/Section.jsx";
import Task from "../ui/Task.jsx";
import {useSelector} from "react-redux";
import {getInProgressTasks} from "../features/todoSlice.js";

function InProgressTasks() {

    const inProgressTasks = useSelector(getInProgressTasks);

    return (
        <Section heading={"In Progress Tasks"} type={'inProgressTask'}>
            {inProgressTasks?.map(task => <Task heading={task.task} key={task.taskId}>{task.description}</Task>)}
        </Section>
    );
}

export default InProgressTasks;