import React, { useRef, useState } from 'react'
import axios from 'axios'
import { FaUser, FaLock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./forgotPassword.scss";
const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleForgotPassWord = async(e) => {
        e.preventDefault();
        setEmail(emailRef.current.value);
        setPassword(passwordRef.current.value);
        try {
            const data = await axios.post(`${process.env.REACT_APP_URL}/api/auth/forgotPassword`, {email, password})
            navigate("/login")
        } catch(err) {
            console.log(err);
        }
    }
  return (
    <div className="login">
            <div className="body">
                <div className="wrapper">
                    <form action="">
                        <h1>Change Password</h1>
                        <div className="input-box">
                            <input type="email" placeholder="email address" ref={emailRef} />
                            <SiGmail className="icon" />
                        </div>


                        <div className="input-box">
                            <input type="password" placeholder="password" ref={passwordRef} />
                            <FaLock className="icon" />
                        </div>


                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />Remember me
                            </label>
                            <a href="#">
                                <Link to="/register">
                                    Don't register?
                                </Link>
                            </a>
                        </div>
                        <button type="submit" onClick={handleForgotPassWord}>
                            Resert Password
                        </button>

                        <div className="register-link">
                            <p>Have an account ?
                                <a href="#">
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ForgotPassword
