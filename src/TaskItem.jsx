function TaskItem(props){
    {if(props.completed===false){
    
        return (
            <>

                <li>
                    {props.name}
                </li>

                <button onClick={() => {props.remove(props.id)}}>Remove</button>

                <button onClick={() => {props.completing(props.id)}}>Completed</button>
            </>
        )
    }else if(props.completed===true){
        return (
            <>
                <p style={{textDecoration: "line-through"}}>
                    {props.name}
                </p>

                <button onClick={() => {props.remove(props.id)}}>Remove</button>
                
                <button onClick={() => {props.uncompleting(props.id)}}>Uncompleted</button>
            </>
        )
    }}

}

export default TaskItem