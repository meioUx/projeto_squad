import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { AppProvider } from "./context/app";
import { Register } from "./pages/auth/Register";
import { Forgot } from "./pages/auth/Forgot";
import { Home } from "./pages/app/Home";

function App() {

  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/recuperar" element={<Forgot />} />
          <Route path="/inicio" element={<Home />} />
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
