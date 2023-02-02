import "../styles/register.css";
import { UserAuth } from "../account/google";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./register";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/Regiter");
    }
  }, [user]);

  const prevent = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, username).then(
      (userCreate) => {
        console.log(userCreate).catch((error) => {
          console.log(error);
        });
      }
    );
  };

  return (
    <div className="container">
      <div className="register__form">
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
            <i class="fa-solid fa-phone-volume"></i>
            <input
              onChange={(e) => setNumber(e.target.value)}
              value={phone}
              id="register__input"
              type="tel"
              placeholder="Enter your phone number"
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
          <div className="input__icons">
            <i class="fa-solid fa-lock"></i>
            <input
              onChange={(e) => setPasswordRepeat(e.target.value)}
              value={passwordRepeat}
              id="register__input"
              type="password"
              placeholder="Repeat the password"
            />
          </div>
          <div className="btn__register">
            <div className="register__btn btns">
              <i class="fa-solid fa-right-to-bracket"></i>
              <button className="btn__signUp custom-bt">Sing Up</button>
            </div>
            <div className="google__btn btns">
              <i class="fa-brands fa-google"></i>
              <button
                onClick={handleGoogleSignIn}
                className="btn__sign-up custom-bt"
              >
                Sign Up with google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
