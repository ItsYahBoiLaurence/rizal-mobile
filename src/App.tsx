import { Route, Routes } from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import Home from "./pages/home"
import Profile from "./pages/profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App