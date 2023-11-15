import TaskList from "../component/TaskList"
import "./IndexTaskList.css"

function IndexTaskList() {
    return (
        <div className="TaskIndex">
            <div className="taskTitleIndex">Production Tasks</div>
            <TaskList />
        </div>
    )
}

export default IndexTaskList