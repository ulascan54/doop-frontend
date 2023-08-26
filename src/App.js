import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage"
import AuthMain from "./components/Auth/Auth"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthMain />} />
        <Route path="/register" element={<AuthMain />} />
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <ArticlesPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
