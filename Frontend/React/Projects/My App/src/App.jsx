import { useState } from 'react'


function App() {
      const [tasks,setTasks] = useState([]);
      const [title,setTitle] = useState("");
      const [description,setDescription] = useState("");

         const addTask = (e) => {
            e.preventDefault();
            setTasks([...tasks , {title:title, description:description}]);
            console.log(tasks);
            setTitle("");
         return (
             <div className="titleCont">
                     {tasks.map((task) => <h1>{task.title}</h1>,<textarea>{tasks.description}</textarea>)}
                </div>
         )


      }


      return (
            <div className="app">
                <div className="addTask">
                    <h1>My App</h1>
                    <input onChange = {(e) => setTitle(e.target.value)} placeholder='Add title of your task' type="text" />
                    <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="description"></textarea>
                    <button  type='submit' onClick={addTask} >Add Task</button>
                </div>

                <div className="addTaskContainer">
                    <div className="titleCont">
                     <input type="checkbox"/>
                     {tasks.map((task) => <h1>{task.title}</h1>)}
                     {tasks.map((task) => <textarea>{task.description}</textarea> )}
                    </div>
                    
                </div>
            </div>
          
      )
}

export default App;
