import TaskItem from './TaskItem.jsx'

function TaskList(props){
    return (

        
    <ul>
        {props.array.map(item => {

                return (
                    <TaskItem 
                    key={item.id}
                    item={item}
                    id={item.id}
                    completed={item.completed}
                    name={item.name}
                    remove={props.remove}
                    completing={props.completing}
                    uncompleting={props.uncompleting}
                    />

         
                )


        })}
    </ul>)
}

export default TaskList 