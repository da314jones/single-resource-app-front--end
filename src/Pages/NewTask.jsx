import TaskNewForm from "../component/TaskNewForm";
import "./NewActor.css"

function NewTask() {

  return (
    <div className="topNewPage">
      <div className="newTitle">Add Task
      </div>
      <div className="form-container"> 
        <TaskNewForm />
      </div>
    </div>
  );
}

export default NewTask;