import React, { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${API}/auth`, {
      email,
      password,
    });

    console.log(res.data);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="card mt-4">
          <form className="card-body" onSubmit={handleSubmit}>
            <h2 className="text-center m-5">Login</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="write email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Write password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block rounded-0"
            >
              Login
            </button>
          </form>
          <p className="text-warning">Register here!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
