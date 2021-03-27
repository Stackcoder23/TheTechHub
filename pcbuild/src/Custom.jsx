import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Logonav from './Logonav';
import './custom.css';
import mb from './mb.jpg';
import processor from './processor.jpg';
import st from './storage.jpg';
import ram from './ram.jpg';
import psu from './psu.jpg';
import gpu from './graphic.jpg';
import cab from './cabinet.jpg';
import cooler from './cooler.jpg';


const Custom = () => {
    var flag = 1;
    const mbid = sessionStorage.getItem("mbid");
    var mbname = "Mother Board";
    if(mbid == null){
        var mbbutton = "+ Add Component";
        flag = 0;
    }
    else{
        var mbbutton = "+ Change Component";
        mbname = sessionStorage.getItem("mbname");
    }

    const proid = sessionStorage.getItem("proid");
    var proname = "Processor";
    if(proid == null){
        var probutton = "+ Add Component";
        flag = 0;
    }
    else{
        var probutton = "+ Change Component";
        proname = sessionStorage.getItem("proname");
    }

    const ramid = sessionStorage.getItem("ramid");
    var ramname = "Ram";
    if(ramid == null){
        var rambutton = "+ Add Component";
        flag = 0;
    }
    else{
        var rambutton = "+ Change Component";
        ramname = sessionStorage.getItem("ramname");
    }

    const stoid = sessionStorage.getItem("stoid");
    var stoname = "Storage";
    if(stoid == null){
        var stobutton = "+ Add Component";
        flag = 0;
    }
    else{
        var stobutton = "+ Change Component";
        stoname = sessionStorage.getItem("stoname");
    }

    const gfxid = sessionStorage.getItem("gfxid");
    var gfxname = "Graphics Card";
    if(gfxid == null){
        var gfxbutton = "+ Add Component";
        flag = 0;
    }
    else{
        var gfxbutton = "+ Change Component";
        gfxname = sessionStorage.getItem("gfxname");
    }

    const psuid = sessionStorage.getItem("psuid");
    var psuname = "Power Supply";
    if(psuid == null){
        var psubutton = "+ Add Component";
        flag = 0;
    }
    else{
        var psubutton = "+ Change Component";
        psuname = sessionStorage.getItem("psuname");
    }

    const cabid = sessionStorage.getItem("cabid");
    var cabname = "Cabinet";
    if(cabid == null){
        var cabbutton = "+ Add Component";
        flag = 0;
    }
    else{
        var cabbutton = "+ Change Component";
        cabname = sessionStorage.getItem("cabname");
    }

    const coolerid = sessionStorage.getItem("coolerid");
    var coolername = "Cooler";
    if(coolerid == null){
        var coolerbutton = "+ Add Component";
        flag = 0;
    }
    else{
        var coolerbutton = "+ Change Component";
        coolername = sessionStorage.getItem("coolername");
    }

    function finish(){
        if(flag == 1){
            let request = [{
                userid: sessionStorage.getItem("user"),
                price: sessionStorage.getItem("mbprice"),
                image: sessionStorage.getItem("mbimage"),
                name: sessionStorage.getItem("mbname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("proprice"),
                    image: sessionStorage.getItem("proimage"),
                    name: sessionStorage.getItem("proname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("ramprice"),
                    image: sessionStorage.getItem("ramimage"),
                    name: sessionStorage.getItem("ramname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("stoprice"),
                    image: sessionStorage.getItem("stoimage"),
                    name: sessionStorage.getItem("stoname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("gfxprice"),
                    image: sessionStorage.getItem("gfximage"),
                    name: sessionStorage.getItem("gfxname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("psuprice"),
                    image: sessionStorage.getItem("psuimage"),
                    name: sessionStorage.getItem("psuname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("cabprice"),
                    image: sessionStorage.getItem("cabimage"),
                    name: sessionStorage.getItem("cabname"),
                },

                {
                    userid: sessionStorage.getItem("user"),
                    price: sessionStorage.getItem("coolerprice"),
                    image: sessionStorage.getItem("coolerimage"),
                    name: sessionStorage.getItem("coolername"),
                },
                
            ]
            Axios.post("http://localhost:3001/insertbuild", request)
            .then(resp => {
                    alert(resp.data.message);
                    console.log(resp.data.message);
                    if(resp.data.message){
                        sessionStorage.removeItem("mbid");
                        sessionStorage.removeItem("proid");
                        sessionStorage.removeItem("ramid");
                        sessionStorage.removeItem("stoid");
                        sessionStorage.removeItem("gfxid");
                        sessionStorage.removeItem("psuid");
                        sessionStorage.removeItem("cabid");
                        sessionStorage.removeItem("coolerid");
                        window.location.reload();
                    }
                }
                ).catch(resp => {
                    alert(resp.data.message);
                });
        }
        else{
            alert("Finish the build first");
        }
    }



    return(
        <>
        <Logonav></Logonav>
        <div className="custombody">
<div className="wrapper">
    <h1>Custom Build</h1>
    

    <br/><br/><br/>
    <button onClick={finish} className="buildbutton" >Finish Build</button><br/><br/><br/>
   <div className="clear"></div>
   <div className="items">
       <div className="item">
           <div className="zoom">
           <img style={{width:"auto"}} src={mb} alt="item" /></div>
            <h2>{mbname}</h2>
           <p>Price Starting From: <em>₹ 1999/-</em>
           </p>
           <a href="/mb" className="add-to-cart">{mbbutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width:"auto"}} src={processor} alt="item" /></div>
            <h2>{proname}</h2>

           <p>Price Starting From: <em>₹ 8999/-</em>
           </p>
           <a href="/pro" className="add-to-cart">{probutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width:"auto"}} src={ram} alt="item" /></div>
            <h2>{ramname}</h2>

           <p>Price Starting From: <em>₹ 1299/-</em>
           </p>
           <a href="/ram" className="add-to-cart">{rambutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width: "auto"}} src={st} alt="item" /></div>
            <h2>{stoname}</h2>

           <p>Price Starting From: <em>₹ 1999/-</em>
           </p>
           <a href="/storage" className="add-to-cart">{stobutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width: "auto"}} src={gpu} alt="item" /></div>
            <h2>{gfxname}</h2>

           <p>Price Starting From: <em>₹ 1999/-</em>
           </p>
           <a href="/gfx" className="add-to-cart">{gfxbutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width:"auto"}} src={psu} alt="item" /></div>
            <h2>{psuname}</h2>

           <p>Price Starting From: <em>₹ 1999/-</em>
           </p>
           <a href="/psu" className="add-to-cart">{psubutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width:"auto"}} src={cab} alt="item" /></div>
            <h2>{cabname}</h2>

           <p>Price Starting From: <em>₹ 1999/-</em>
           </p>
           <a href="/cab" className="add-to-cart">{cabbutton}</a>
       </div>


       <div className="item">
        <div className="zoom">
           <img style={{width:"auto"}} src={cooler} alt="item" /></div>
            <h2>{coolername}</h2>

           <p>Price Starting From: <em>₹ 1999/-</em>
           </p>
           <a href="/cooler" className="add-to-cart">{coolerbutton}</a>
       </div>
   </div>
</div>
</div>
        </>
    );
}

export default Custom;