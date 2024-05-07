import './App.css'
import {Route, Routes  } from "react-router-dom";
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup';
import Samples from './components/Samples'
import About from './components/About';
import Profile from './components/Profile'
function App() {
  return (
    <>
     <Routes>
     <Route path='/' element={<Samples />}/>
     <Route path='/login' element={<Login />}/>
     <Route path='/signup' element={<Signup />}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/profile' element={<Profile/>}/>
     </Routes>
      </>
  );
}

export default App;
