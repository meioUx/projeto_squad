import { useNavigate } from "react-router-dom";
import { useApp } from "../../../context/app";
import "./register.style.css";
import { useEffect } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

export function Register() {
  const navigate = useNavigate();
  const { isLoading, signUp, user } = useApp();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    if (formJson.email === "" || formJson.name === "" || formJson.password === "") {
      window.alert("Por favor, preencher todos os campos");
      return;
    }

    await signUp({
      email: formJson.email,
      password: formJson.password,
    });
  }

  useEffect(() => {
    if (user) {
      navigate("/inicio");
    }
  }, [user]);

  return (
    <div className="containerRegister">
      <div className="containerFormRegister">
        <div className="containerSubscribeRegister">
          <h2>Comece uma nova jornada</h2>
          <div>
            <a>Já tem uma conta?</a>
            <button type="button" onClick={() => navigate("/")}>
              Conecte-se
            </button>
          </div>
        </div>
        <form method="post" onSubmit={handleSubmit} className="formRegister">
          <h2>Crie sua conta com </h2>
          <div className="social-icons">
            <div className="icon"><FaFacebook /></div>
            <div className="icon"><FaLinkedin /></div>
            <div className="icon"><FaGoogle /></div>
          </div>
          <p>ou use um e-mail para cadastrar</p>
          <label>
            <input name="name" placeholder="Nome" />
          </label>
          <label>
            <input name="email" placeholder="Email" />
          </label>
          <label>
            <input name="password" placeholder="Password" />
          </label>
          <button disabled={isLoading} type="submit">
            Cadastra-se
          </button>
        </form>
      </div>
    </div>
  );
}
