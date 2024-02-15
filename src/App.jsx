import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeComponent from './Components/Home'
import QuizComponents from './Components/Quiz'
import ResultComponent from './Components/Result'

function App() {

  return (

    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/quiz' element={<QuizComponents />} />
      <Route path='/result' element={<ResultComponent />} />
    </Routes>

  )
}

export default App
