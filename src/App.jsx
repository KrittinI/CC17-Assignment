import Router from "./routes/Router"
import './App.css'
import MyFavouriteContextProvider from './context/MovieListContext'

function App() {

  return (
    <>
      <MyFavouriteContextProvider>
        <Router />
      </MyFavouriteContextProvider>
    </>
  )
}

export default App
