import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Summer from "./pages/Summer"
import Autumn from "./pages/Autumn"
import Spring from "./pages/Spring"
import Winter from "./pages/Winter"
function App() {

  return (
    <>
      <Nav />
      {/* <Routes>
        <Route path="/summer" element={<Summer/>} />
        <Route path="/autumn" element={<Autumn/>} />
        <Route path="/spring" element={<Spring/>} />
        <Route path="/winter" element={<Winter/>} />
      </Routes> */}
      <Footer />
    </>
  )
}

export default App
