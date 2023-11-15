import TaskList from "../component/TaskList"
import "./IndexTaskList.css"

function IndexTaskList() {
    return (
        <div className="TaskIndex">
            <p className="taskTitleIndex">Production Tasks</p>
            <div className="task-list-container">
                <img className="task-img" src="/_b539b5a6-620f-4207-88ad-511f7ade4b99.jpeg" alt="" />
            </div>
            <TaskList />
        </div>
    )
}

export default IndexTaskList