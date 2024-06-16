import { Route, Routes } from "react-router-dom"
import App from "./App"
import Home from "./pages/home/Home"
import About from "./pages/about/About"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={ <App /> } >
        <Route index element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Route>
    </Routes>
  )
}

export default Routing