import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { useLoginUserMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";

function LoginPage() {
  const {userData} = useSelector((state) => state.auth)

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      let data = await loginUser({ email, password }).unwrap();
      await dispatch(setCredentials({...data}))
      navigate('/')
    } catch (error) {
      console.log(error?.data?.message || error?.message);
    }
  };

  useEffect(()=>{
    if(userData){
      navigate('/')
    }
  },[])

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={loginHandler}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="register-btn">
            Login
          </button>
        </form>
        <p className="login-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
