import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/Form.css"

const login = () => {
    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>
            
            <div className="loginCreateAccount">
                <p>Don't have an account yet? Please <a href="/registerPage">sign up</a> to create an account.</p>
            </div>
            <div className="loginContainer">
            <h1>
            Login Here
        </h1>
                <label for="email">Email:</label>
                <input type="email" placeholder="Enter Email" name="email" required /><br/><br/>

                <label for="psw">Password:</label>
                <input type="password" placeholder="Enter Password" name="psw" required /><br></br>


                <Link to="/">
                    <button type="submit">LOGIN</button><br></br>
                </Link>
                <p>
                    <a href="#">Reset Password</a>
                </p>
                <Link to="/"><button type="goback">HOME</button></Link>
                <button type="cancel" onClick={refreshPage}>CLEAR</button>
            </div>
        </>
       
    )
}

export default login
