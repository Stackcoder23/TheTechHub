import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './bootstrap-slider.css';
import Axios from 'axios';
import Modal from 'react-modal';
import Logonav from './Logonav';


function Graphicscard(){

    const [gfxlist, setgfxlist] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/readgfx').then((response)=> {
            setgfxlist(response.data);
        })
    }, [])

    

    return(
        <>
        <Logonav></Logonav>
    <link rel="stylesheet" href="bootstrap.min.css"/>
    <link rel="stylesheet" href="bootstrap-slider.css"/>
  
            <section className="section-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div class="category-search-filter">
					            <div class="row">
						            <div class="col-md-6">
                                        <strong>Sort</strong>
                                        <select>
                                            <option value="1">Most Popular</option>
                                            <option value="2">Lowest Price</option>
                                            <option value="4">Highest Price</option>
                                        </select>
						            </div>
					            </div>
				            </div>

                            <div className="product-grid-list">
                                <div className="row mt-30">

                                    {gfxlist.map((val,key)=> {
                                        return <div className="col-sm-12 col-lg-4 col-md-6">
                                        <div className="product-item bg-light">
                                            <div className="card" style={{height: "600px"}}>
                                                <div className="thumb-content">
                                                    {/* <a href=""> */}
                                                        <img className="img" src={val.image} alt="card image"/>
                                                    {/* </a> */}
                                                </div>
                                                <div class="card-body">
										            <h4 class="card-title"><a href="single.html">{val.name}</a></h4>
										
                                                    <p>Clock speed: {val.clock_speed}</p>
                                                    <p>Memory: {val.memory}</p>
                                                    <p>Interface: {val.interface}</p>
                                                    <p>{val.price}/-</p>
										            <button onClick={() => { 
                                                        sessionStorage.setItem("gfxid", val._id);
                                                        sessionStorage.setItem("gfxname", val.name);
                                                        sessionStorage.setItem("gfxprice", val.price);
                                                        sessionStorage.setItem("gfximage", val.image);
                                                        window.open("/custom","_self"); 
                                                        }}>Add to build</button>
										
									            </div>
                                            </div>
                                        </div>
                                    </div>
                                    })}
                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </section>
            
        </>
    );
}

export default Graphicscard;