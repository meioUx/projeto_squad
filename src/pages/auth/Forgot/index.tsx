import "./forgot.style.css";
import { useNavigate } from "react-router-dom";

export function Forgot() {
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);
  }

  return (
    <div className="containerForgot">
      <div className="containerFormForgot">
        <div className="containerSubscribeForgot">
          <h2>Recupere seu acesso</h2>
          <div>
            <a>Não tem uma conta?</a>
            <button type="button" onClick={() => navigate("/register")}>
              Cadastre-se
            </button>
          </div>
        </div>
        <form method="post" onSubmit={handleSubmit} className="formForgot">
          <h2>Vamos recuperar sua senha?</h2>
          <p>Digite seu e-mail para recuperar sua senha</p>
          <label>
            <input name="email" placeholder="Email" />
          </label>
          <button type="submit">Enviar</button>
          <a className="login-link" onClick={() => navigate("/login")}>
            Quer tentar fazer seu login novamente?
          </a>
        </form>
      </div>
    </div>
  );
}
