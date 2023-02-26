
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/LoginSignin/Login';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>      
    </div>
  )
}

export default App
