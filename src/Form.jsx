const Form = (props) => {
    return (
        <div className="form">
            <input type="text" placeholder="Add Task" name="task" onChange={props.func1} value={props.task}></input>
            <button onClick={props.func2}><span>Add</span></button>
        </div>
    )
}

export default Form;