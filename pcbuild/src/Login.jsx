import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';
import './login.css';
import Axios from 'axios';
import { Redirect } from 'react-router';

function Login() {
    sessionStorage.removeItem("user");
    return (
        <>
        <div className="body">
        <form action="" className="login-form" onSubmit={(e) => login(e)}>
            <h1>TheTechHub Login</h1>

            <div class="txtb">
                <input id="email" type="text" placeholder="Username" required></input>
            </div>
            <div className="txtb">
                <input id="pass" type="password" placeholder="Password" required></input>
            </div>

            <input type="submit" class="logbtn" value="Login"></input>

            <div class="bottom-text">
                Don't have account? <a href="register">Sign up</a>
            </div>
            </form>
        </div>

            {/*<script type="text/javascript">
                $(".txtb input").on("focus",function(){
                $(this).addClass("focus");
                });

                $(".txtb input").on("blur",function(){
                if($(this).val() == "")
                $(this).removeClass("focus");
            });

            </script>*/}
        </>
    );
}

function login(e){
    e.preventDefault();
    let request = {
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
    }
    Axios.post('http://localhost:3001/login', request)
    .then( resp => {
        alert(resp.data.message);
        if(resp.data.message === "Welcome"){
            sessionStorage.setItem("user", request.email);
            window.open("/home","_self");
        }
    })
    .catch( err => {
        console.log(err);
    })
}
export default Login;