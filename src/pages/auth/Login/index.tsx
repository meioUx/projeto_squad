import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa"; // Importando os ícones
import "./login.style.css";
import { useApp } from "../../../context/app";
import { useEffect } from "react";

export function Login() {
  const { signIn, user, isLoading } = useApp();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    if (!formJson.email || !formJson.password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    await signIn(formJson);
    console.log(formJson);
  }

  useEffect(() => {
    if (user) {
      navigate("/inicio");
    }
  }, [user, navigate]);

  return (
    <div className="containerLogin">
      <div className="containerFormLogin">
        <form method="post" onSubmit={handleSubmit} className="formLogin">
          <h2>Conecte-se com</h2>

          {/* Adicionando os ícones de redes sociais */}
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaGoogle className="icon" />
            <FaLinkedin className="icon" />
          </div>

          <p>Ou use o e-mail da sua conta</p>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              type="email"
              required
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              aria-label="Password"
              required
            />
          </label>
          <a href="/recuperar">Esqueceu sua senha?</a>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Carregando..." : "Entrar"}
          </button>
        </form>
        <div className="containerSubscribeLogin">
          <h2>Bem-vindo de Volta!</h2>
          <div>
            <NavLink to="/recuperar">Não tem uma conta?</NavLink>
            <NavLink to="/cadastro">Cadastre-se</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
