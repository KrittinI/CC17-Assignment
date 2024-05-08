import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import MyTodo from "../pages/MyTodo"
import './Router.css'

const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/", element: <MyTodo /> },
])

function Router() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router