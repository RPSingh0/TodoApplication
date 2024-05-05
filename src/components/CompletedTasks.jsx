import {useSelector} from "react-redux";
import {getCompletedTasks} from "../features/todoSlice.js";
import Section from "../ui/Section.jsx";
import Task from "../ui/Task.jsx";

function CompletedTasks() {
    const completedTask = useSelector(getCompletedTasks);

    return (
        <Section heading={"Completed Tasks"} type={'completedTask'}>
            {completedTask?.map(task => <Task heading={task.task} key={task.taskId}>{task.description}</Task>)}
        </Section>
    );
}

export default CompletedTasks;