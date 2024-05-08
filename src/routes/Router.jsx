import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import MyTodo from "../pages/MyTodo"
import MyFavouriteList from '../pages/MyFavouriteList'
import HomePage from "../pages/HomePage"
import './Router.css'

const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/", element: <MyTodo /> },
    { path: "/fevlist", element: <MyFavouriteList /> },
    { path: "/movie", element: <HomePage /> },
])

function Router() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router