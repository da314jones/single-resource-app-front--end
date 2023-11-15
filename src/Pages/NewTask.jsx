import TaskNewForm from "../component/TaskNewForm";
import "./NewTask.css"
import "./NewActor.css"

function NewTask() {

  return (
    <div className="topNewPage">
      <p className="newTitle">Add Task
      </p>
      <div className="form-container"> 
      <div className="task-left-container">
        <img className="task-img-left" src="/_66f7b7ad-71e3-4573-a092-08dfd2f159a9.jpeg" alt="" />
      </div>
      <div className="spacer-left" ></div>
        <div task-center-container>
        <TaskNewForm />
          </div>
          <div className="spacer-right"></div>
      <div className="task-right-container">
        <img className="task-img-right" src="/_9851f7fd-f000-4b90-95c9-8e45b30a58fb.jpeg" alt="" />
      </div>
      </div>
    </div>
  );
}

export default NewTask;