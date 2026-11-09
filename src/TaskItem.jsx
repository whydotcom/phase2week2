function TaskItem(props){
    {if(props.completed===false){
    
        return (
            <>

                <li>
                   <p>{props.name}</p>

                    <button onClick={() => {props.remove(props.id)}}>Remove</button>

                    <button onClick={() => {props.completing(props.id)}}>Completed</button>
                </li>

            </>
        )
    }else if(props.completed===true){
        return (
            <>
                <li style={{listStyleType: "none"}}>
                    <p style={{textDecoration: "line-through"}}>
                        {props.name}
                    </p>

                    <button onClick={() => {props.remove(props.id)}}>Remove</button>

                    <button onClick={() => {props.uncompleting(props.id)}}>Uncompleted</button>
                </li>
            </>
        )
    }}

}

export default TaskItem