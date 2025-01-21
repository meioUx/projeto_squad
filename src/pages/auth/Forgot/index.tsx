import "./forgot.style.css"
export function Forgot() {

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
        <form method="post" onSubmit={handleSubmit} className="formForgot">
          <h2>
            Conecte-se com
          </h2>
          <p>
            Digite seu e-mail para a recuperar sua senha
          </p>
          <label>
            <input name="email" placeholder="Email" />
          </label>
          <button type="submit">Enviar</button>
        </form>
        <div className="containerSubscribeForgot">
          <h2>
            Vamos recuperar sua senha?
          </h2>
          <div>
            <a>
              Não tem uma conta?
            </a>
            <button type="submit">Cadastre-se</button>
          </div>
        </div>
      </div>
    </div>
  )
}