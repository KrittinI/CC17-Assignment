import { useEffect, useState } from "react"
import Todo from "../components/Todo"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './MyTodo.css'


function MyTodo() {

    const navigate = useNavigate()
    const [todos, setNewTodos] = useState([])
    const [inputTodo, setInputTodo] = useState('')

    useEffect(() => {
        getAllTodo()
    }, [])


    const handleLogout = () => {
        navigate("/login")
    }



    const handleChangeInput = (e) => {
        setInputTodo(e.target.value)
    }

    const handleKeyDown = (e) => {
        const data = { title: inputTodo }
        if (e.key == "Enter" && inputTodo.length !== 0) {
            postTodo(data);
            setInputTodo('')
        }
    }

    const getAllTodo = async () => {
        try {
            const response = await axios.get('https://cc17-assessment-api.onrender.com/v1/todo?userId=3')
            console.log(response.data.data);
            setNewTodos(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    const postTodo = async (data) => {
        try {
            const response = await axios.post('https://cc17-assessment-api.onrender.com/v1/todo?userId=3', data)
            console.log(response.data.data);
            setNewTodos([response.data.data, ...todos])

        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (id) => {
        const foundIndex = todos.findIndex((todo) => todo.id === id)
        try {
            const response = await axios.delete(`https://cc17-assessment-api.onrender.com/v1/todo/${id}?userId=3`)
        } catch (error) {
            console.log(error);
        }
        const newTodos = [...todos]
        newTodos.splice(foundIndex, 1)
        setNewTodos(newTodos)

    }
    return (
        <div className="border">
            <h1>My Todo</h1>
            <br />
            <label>new task</label>
            <input value={inputTodo} onChange={handleChangeInput} onKeyDown={handleKeyDown} />
            <hr />
            <ul>
                {todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
            </ul>
            <button onClick={handleLogout}>LOG OUT</button>
        </div>
    )
}

export default MyTodo