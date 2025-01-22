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
import 'antd/dist/reset.css';
import { Profile } from "./pages/app/Profile";

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
          <Route path="/perfil" element={<Profile />} />
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
