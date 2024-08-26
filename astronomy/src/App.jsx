import { Outlet } from "react-router-dom"
import Footer from "./components/Shared/Footer"
import NavBar from "./components/Shared/Navbar"

function App() {

  return (
    <div>

      <NavBar/>
    <main>
      <Outlet/>
    </main>

    <Footer />
  </div>
  )
}

export default App
