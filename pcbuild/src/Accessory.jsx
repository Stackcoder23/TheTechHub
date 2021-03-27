import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './bootstrap-slider.css';
import Axios from 'axios';
import Logonav from './Logonav';


function Accessory(){

    const [acclist, setAccList] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/readacc').then((response)=> {
            setAccList(response.data);
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
                                    

                                    {acclist.map((val,key)=> {
                                        return <div className="col-sm-12 col-lg-4 col-md-6">
                                        <div className="product-item bg-light">
                                            <div className="card">
                                                <div className="thumb-content">
                                                    
                                                        <img className="img" src={val.image} alt="card image"/>
                                                    
                                                </div>
                                                <div class="card-body">
										            <h4 class="card-title">{val.name}</h4>
										
										            <p>Type: {val.type}</p>
                                                    <p>{val.price}/-</p>
										            <button onClick= {() => {
                                                            let request = {
                                                                userid: sessionStorage.getItem("user"),
                                                                price: val.price,
                                                                image: val.image,
                                                                name: val.name,
                                                            }
                                                            Axios.post("http://localhost:3001/insertcart", request)
                                                            .then(resp => {
                                                                alert(resp.data.message);
                                                                console.log(resp.data.message);
                                                            }
                                                            ).catch(resp => {
                                                                alert("error");
                                                            });
                                                    }}>Add to cart</button>
                                                    
										
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

export default Accessory;