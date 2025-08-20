import { Route, Routes } from "react-router-dom"
import CaptainHome from "./pages/CaptainHome"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Home from "./pages/Home"
import Start from "./pages/Start"
import UserLogin from "./pages/UserLogin"
import UserLogout from "./pages/UserLogout"
import UserProtectWrapper from "./pages/UserProtectWrapper"
import UserSignup from "./pages/UserSignup"

const App = () => {

  

  return (
    <div >
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />

        <Route path="/users/logout" element={<UserProtectWrapper>
          <UserLogout />
        </UserProtectWrapper>} />

        <Route path="/captain-home" element={<CaptainHome />} />
      </Routes>
      
    </div>
  )
}

export default App
