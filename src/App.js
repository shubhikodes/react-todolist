import React, {useState} from "react";
import Heading from "./Heading";
import Form from "./Form";
import ListItem from "./ListItem";

const App = () => {

  const [task,setTask] = useState('');
  const [taskArray,setTaskArray] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleClick = () => {
    setTaskArray([...taskArray,task]);
    setTask('');
  }

  const deleteValue = (id) => {
    const newTaskArray = taskArray.filter((element,index)=>{
      return (index!==id);
    });
    setTaskArray(newTaskArray);
  }

  const editValue = (id) => {
    setTask(taskArray[id]);
  }

  return(
    <div className="container">
      <Heading />
      <Form func1={handleChange} func2={handleClick} task={task}/>

      <ul>
        {
          taskArray.map((value,index)=>{
            return (
              <ListItem func3={deleteValue} func4={editValue} item={value} key={index} id={index}/>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;