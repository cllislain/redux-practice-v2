import { updateInputValue, addTodoItem, deleteTodoItem, toggleComplete } from "../features/todo"
import { useDispatch, useSelector } from "react-redux"
import '../styles/TodoList.css'

const TodoList = () => {
    
    const list = useSelector((state) => state.todo.list)
    const inputValue = useSelector((state) => state.todo.inputValue)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodoItem())
    }

    console.log(list)

  return (
    <div>
        <h1 className="todo">To-do List</h1>
        <form onSubmit={handleSubmit}>
            <input value={inputValue} type="text" onChange={(e) => {
                dispatch(updateInputValue(e.target.value))
            }}/>
        </form>
        <div>{list.map(({name, completed}, index) => (
            <div key={index} className="displayItems">
                {completed ? "COMPLETED" : name}
            <div>
                <button  className="editBtn" onClick={() => {
                    dispatch(toggleComplete(index))
                }}>Complete</button>
                <button className="deleteBtn" onClick={() => {
                    dispatch(deleteTodoItem(index))
                }}>Delete</button>
            </div>   
                
            </div>
        ))}</div>
    </div>
  )
}

export default TodoList