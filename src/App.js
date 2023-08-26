import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ArticlesPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
