import "./App.scss"
import { useState, useRef } from "react"
import { List } from "./components"
import { ListItem } from "./components"
import { SortList } from "./components"
function App() {
    const elInput = useRef()
    const [todos, setTodos] = useState(JSON.parse((window.localStorage.getItem("todos")) || []))

    const handleInputValue = (evt) => {
        evt.preventDefault()
        const newTodo = {
            id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
            // text: evt.target.value,
            text: elInput.current.value,
            isCompleted: false
        }
        setTodos([...todos, newTodo]);
        evt.current.value = " "

    }
    window.localStorage.setItem("todos", JSON.stringify(todos))
    return (
        <div className="App">
            <form onSubmit={handleInputValue}>
                <input ref={elInput} type="text" placeholder="Type" />
                <button type="submit">Submit</button></form>
            {todos.length > 0 && <List>{todos.map(e => (
                <ListItem key={e.id} item={e} todos={todos} setTodos={setTodos}>{e.id + " " + e.text}</ListItem>
            ))}</List>}
            <SortList ></SortList>

        </div>
    )
}
export default App