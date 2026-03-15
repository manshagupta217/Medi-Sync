import { Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Hospitals from "./pages/Hospitals"
import Emergency from "./pages/Emergency"
import Map from "./pages/Map"

function App(){
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/hospitals" element={<Hospitals/>} />
      <Route path="/emergency" element={<Emergency/>} />
      <Route path="/map" element={<Map/>} />
    </Routes>
  )
}

export default App