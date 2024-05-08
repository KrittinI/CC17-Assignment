import Router from "./routes/Router"
import './App.css'
import MyFavouriteContextProvider from './context/MovieListContext'

function App() {

  return (
    <div>
      <MyFavouriteContextProvider>
        <Router />
      </MyFavouriteContextProvider>
    </div>
  )
}

export default App
