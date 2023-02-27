
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/LoginSignin/Login';
import RetailerDashboard from './Pages/RetailerDashboard/RetailerDashboard';
import Navbar from './Shared/Navbar/Navbar';

function App() {


  return (
    <div>
     
      <div>
      <Navbar></Navbar>
      </div>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/retailer-dashboard' element={<RetailerDashboard></RetailerDashboard>}></Route>
      </Routes>      
    </div>
  )
}

export default App
