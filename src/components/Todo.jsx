import { useState } from "react"
import './Todo.css'

function Todo(props) {
    const { deleteTodo } = props
    const { id, title } = props.todo
    const [isCheck, setIsCheck] = useState(false)

    const handleCheckBox = (e) => {
        setIsCheck(e.target.checked)
    }
    return (
        <li className="Todo">
            <input onChange={handleCheckBox} type="checkbox" />
            <p style={{ textDecoration: isCheck ? "line-through" : "none" }}>{title}</p>
            <button onClick={() => deleteTodo(id)}>x</button>
        </li>
    )
}

export default Todo