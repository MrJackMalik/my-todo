export const ListItem = ({ item, todos, setTodos }) => {
    const { id, isCompleted, text } = item
    const handleDeleteTodo = (todoId) => {
        const filteredTodos = todos.filter(todo => todo.id !== todoId)
        setTodos([...filteredTodos]);
    }
    const handleEditTodo = (todoId) => {
        const editText = prompt("New todo :")
        const findTodo = todos.find(todo => todo.id === todoId)
        findTodo.text = editText
        setTodos([...todos])
    }
    const handleCheckTodo = (todoId) => {
        const findTodo = todos.find(todo => todo.id === todoId)
        findTodo.isCompleted = !findTodo.isCompleted
        setTodos([...todos])
    }

    return (
        <div>
            <li className="d-flex align-items-center mt-3 box-shadow">
                <span>ID: {id}</span>
                <input onChange={() => { handleCheckTodo(id) }} defaultChecked={isCompleted} className="form-check-input mx-3" type="checkbox" />
                <strong className={isCompleted ? "text-decoration-line-through" : ""}>{text}</strong>
                <button onClick={() => handleEditTodo(id)} className="btn btn-primary mx-3">Edit</button>
                <button onClick={() => handleDeleteTodo(id)} className="btn btn-danger">Delete</button>

            </li>
        </div>

    )
}