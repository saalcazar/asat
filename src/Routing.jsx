import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import About from './pages/about/About'
import History from './pages/history/History'
import Projects from './pages/projects/Projects'
import Staff from './pages/staff/Staff'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element = {<App />}>
        <Route index element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/history' element={ <History /> } />
        <Route path='/:name' element={ <Projects /> } />
        <Route path='/staff' element={ <Staff /> } />
      </Route>
    </Routes>
  )
}

export default Routing