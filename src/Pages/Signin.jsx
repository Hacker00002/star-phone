import "../styles/signin.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Pages/register";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const prevent = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCreate) => {
      console.log(userCreate).catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div className="container">
      <div className="all__father-sign">
        <h1>
          Hello user <i class="fa-solid fa-user-tie"></i>
        </h1>
        <form onSubmit={prevent} id="register">
          <div className="input__icons">
            <i class="fa-solid fa-envelope-open-text"></i>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="register__input"
              type="email"
              placeholder="Enter your account"
            />
          </div>
          <div className="input__icons">
            <i class="fa-solid fa-user-pen"></i>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="register__input"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="input__icons">
            <i class="fa-solid fa-unlock-keyhole"></i>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="register__input"
              type="password"
              placeholder="Enter a password"
            />
          </div>
          <div className="signIn__btn">
            <div className="register__btn btns">
              <i class="fa-solid fa-right-to-bracket"></i>
              <button className="btn__signUp custom-bt">Sing In</button>
            </div>
            <div className="register__btn btns">
              <i class="fa-solid fa-user-pen"></i>
              <Link to={"/Register"}>
                <a href="/" className="btn__signUp custom-bt">
                  Sing Up
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
