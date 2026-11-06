import { useState } from 'react'
import TaskList from './TaskList.jsx'
import UnfinishedTasks from './UnfinishedTasks.jsx'

function App() {

  const [tasks, setTasks] = useState([]);

  const [incomplete, setIncomplete] = useState(0)

  function addTask(e){

    e.preventDefault();

    //read the submitted data
    const form = e.target;
    const formData = new FormData(form);

    //make it into an object to work with
    const formJson = Object.fromEntries(formData.entries());

    const taskName = formJson["task-name"]

    if(taskName !== " "){
      const taskObject = {
        id:(tasks.length+1),
        name:taskName,
        completed:false
      };
  
      const newTasks = [...tasks, taskObject];

      setIncomplete(prev => prev +1);
      setTasks(newTasks);

      e.target.reset();
    }else{
      alert("Must Fill Out Form");
      e.target.reset();
    }

  }

  function removeTask(id){
    const lessTasks = tasks.filter(item => item.id !== id);
    const leftOut = tasks.filter(item => item.id === id);

    if(leftOut[0].completed===false){
      if(incomplete>0){
        setIncomplete(prev => prev -1);
      };
    }

    setTasks(lessTasks);


  }

  function completeTask(id){
    const aArray = tasks.map(item => {
      if(item.id === id && item.completed !== true){

        return {...item, completed: true};

      }else{
        return item;
      };
    });

    const bArray = aArray.filter(item => item.completed !== true);

    const cArray= aArray.filter(item => item.completed == true);

    const newestArray = [...bArray,...cArray];

    if(incomplete>0){
      setIncomplete(prev => prev -1);
    };

    
    setTasks(newestArray);
  }

  function uncompleteTask(id){
    const aArray = tasks.map(item => {
      if(item.id === id && item.completed === true){

        return {...item, completed: false};

      }else{
        return item;
      };
    });

    const bArray = aArray.filter(item => item.completed !== true);

    const cArray= aArray.filter(item => item.completed == true);

    const newestArray = [...bArray,...cArray];

    setIncomplete(prev => prev +1);
    
    setTasks(newestArray);
  }



  return (
    <div>
      {tasks.length>0 ? <TaskList array={tasks} remove={removeTask} completing={completeTask} uncompleting={uncompleteTask} /> : "No tasks yet"}

      <p> Incomplete Tasks: {incomplete}</p>

      <hr />

      <form onSubmit={addTask}>
        <input name="task-name" required />

        <button type='submit'>Submit</button>
      </form>

    </div>


  )

}

export default App
