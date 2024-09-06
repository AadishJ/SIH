import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Dashboard from './Pages/Dashboard/Dashboard';
import NavBar from './Pages/Navbar/Navbar';
import Profile from './Pages/Profile/Profile';
import About from './Pages/About/About';
import Test from './Pages/Test/Test';
function App() {

  return (
    <>
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/about" element={ <About /> } />
        <Route path='/test' element={<Test/>}/>
      </Routes>
    </>
  );
}

export default App;
