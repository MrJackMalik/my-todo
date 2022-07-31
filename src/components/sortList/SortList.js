// import { ListItem } from "../ListItem"

export const SortList = ({ item, todos, setTodos }) => {
    // const { id, isCompleted, text } = item
    const handleAllTodo = () => {

        // <ListItem key={todos.id} item={todos} todos={todos} setTodos={setTodos}>{todos.id + " " + todos.text}</ListItem>
    }
    const handleCompletedTodo = () => {

    }
    const handleUncompletedTodo = () => {

    }


    return (
        <div className="mx-3">
            <button className="btn btn-primary" onClick={() => handleAllTodo()}>All</button>
            <button className="btn btn-success mx-3" onClick={() => handleCompletedTodo()}>Completed</button>
            <button className="btn btn-danger" onClick={() => handleUncompletedTodo()}>UnCompleted</button></div>
    )
}
