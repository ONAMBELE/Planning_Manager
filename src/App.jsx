import './App.css'
import BoardSpace from './pages/BoardSpace'
import Workspaces from './pages/Workspaces'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Workspaces/>}/>
          <Route path='/board' element={<BoardSpace/>}/>
          <Route path='*' element={<Workspaces/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
