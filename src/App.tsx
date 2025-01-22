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
import { CreateSquad } from "./pages/app/telas/CreateSquad";
import { CreateProject } from "./pages/app/telas/CreateProject";
import { AddMember } from "./pages/app/telas/AddMember";

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
          <Route path="/criarsquad" element={<CreateSquad />} />
          <Route path="/criarprojeto" element={<CreateProject />} />
          <Route path="/adicionarmembro" element={<AddMember />} />
        </Routes>
      </AppProvider>
    </Router>
  )
}

export default App
