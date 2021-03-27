import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';
import './login.css';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

function Register() {
    const [name, setname] = useState("");
    const [email, setemail] = useState(""); 
    const [password, setpassword] = useState("");  

    // const add = () => {
    //     Axios.post("http://localhost:3001/insert", 
    //     {   name: name,
    //         email: email,
    //         password: password,
    //     }).then(resp => {
    //         alert(resp.data.message);
    //         console.log(resp.data.message);
    //         window.open("/login","_self");
    //     }
    //     ).catch(resp => {
    //         alert(resp.data.message);
    //     });
    // };
    return (
        <>
        <div className="body">
        <form action="" className="login-form" onSubmit={(e) => add(e)}>
            <h1>TheTechHub Register</h1>

            <div class="txtb">
                <input type="text" id="name" placeholder="Name" required></input>
            </div>
            <div class="txtb">
                <input type="email" id="email" placeholder="Email ID" required></input>
            </div>
            <div class="txtb">
                <input type="password" id="pass" placeholder="Password" required></input>
            </div>

            <input type="submit" class="logbtn" value="Register"></input>

            <div class="bottom-text">
                Already Customer? <a href="login">Login</a>
            </div>
            </form>
            </div>
        </>
    );
}

function add(e){
    e.preventDefault();
    let request = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,
    }
    Axios.post("http://localhost:3001/insert", request)
    .then(resp => {
            alert(resp.data.message);
            console.log(resp.data.message);
            window.open("/login","_self");
        }
        ).catch(resp => {
            alert(resp.data.message);
        });
}

export default Register;