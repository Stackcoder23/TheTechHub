import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Logonav from './Logonav';
import './about.css';
import Axios from 'axios';
import suresh from './suresh.jpeg';
import mandar from './mandar.png';
import pranath from './pranath.jpeg';
import sumant from './sumant.jpeg';
import Footer from './Footer';



function About(){
    return(
        <>
            <div class="about-section">
            <h1>About Us</h1>
            <p>“THE TECH HUB” which is Online PC BUILDING SYSTEM. When it comes to hardcore gaming or video editing, smartphones and tablet just won’t do. Hardcore gaming and video edition requires the right gear, and there is no better way to dive headfirst into a first-person shooter or fast-action multiplayer than with a custom PC you built on your own. Building your own personal computer may be the perfect solution, but it can also be a long and strenuous journey.</p>
        </div>

        <h2 style={{textAlign:"center"}}>Our Team</h2>
        <div class="row">
            <div class="aboutcolumn">
                <div class="aboutcard">
                <img src={suresh} alt="Jane" style={{width:"100%"}}/>
                    <div class="aboutcontainer">
                    <h2>Suresh Suthar</h2>
                    <p>sureshsuthar262626@gmail.com</p>
                    
                    </div>
                </div>
            </div>
            <div class="aboutcolumn">
                <div class="aboutcard">
                <img src={mandar} alt="Jane" style={{width:"100%"}}/>
                    <div class="aboutcontainer">
                    <h2>Mandar Joshi</h2>
                    <p>mjoshi23.mj@gmail.com</p>
                    
                    </div>
                </div>
            </div>
            <div class="aboutcolumn">
                <div class="aboutcard">
                <img src={pranath} alt="Jane" style={{width:"100%"}}/>
                    <div class="aboutcontainer">
                    <h2>Pranath Naik</h2>
                    <p>pranathnaik@gmail.com</p>
                    
                    </div>
                </div>
            </div>
            <div class="aboutcolumn">
                <div class="aboutcard">
                <img src={sumant} alt="Jane" style={{width:"100%"}}/>
                    <div class="aboutcontainer">
                    <h2>Sumant Mulgaoonkar</h2>
                    <p>mulgaonkarsumant163@gmail.com</p>
                    
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}

export default About;
