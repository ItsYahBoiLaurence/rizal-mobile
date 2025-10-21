import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Login from "./pages/auth/login"
import AuthAppLayout from "./components/Layout/AppAuthLayout"
import Register from "./pages/auth/register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path={'profile'} element={<Profile />} />
      </Route>
      <Route path="/auth" element={<AuthAppLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App