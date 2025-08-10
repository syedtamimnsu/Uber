import { Route, Routes } from "react-router-dom"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"

const App = () => {

  

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
      </Routes>
      
    </div>
  )
}

export default App
