import { useState } from "react";

function Login() {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormulario({
      formulario,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formulario);
  };

  return (
    
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className="row text-center">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="emailInput"
            onChange={handleInputChange}
            value={formulario.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            name="passwordInput"
            onChange={handleInputChange}
            value={formulario.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

    </div>
  </div>

  );
}

export default Login;
