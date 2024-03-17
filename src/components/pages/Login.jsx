import { useState } from "react";
import { loginService } from "../../services/Auth.services";


function Login() {
  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value,
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(formulario);

    loginService(formulario)
    .then(response => {
      const token = response.data.data;
      console.log(response);
    }).catch(error => {
      console.error(error);
    })
  }

  return (
    <div className="container">
        <h1 className="text-center mb-5">Login</h1>
        <form onSubmit={enviarDatos}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={formulario.email}/>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleInputChange}
              value={formulario.password}/>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
  );
}

export default Login;
