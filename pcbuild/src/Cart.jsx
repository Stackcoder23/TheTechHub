import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Logonav from './Logonav';
import './cart.css';
import Axios from 'axios';

function Cart(){
    const [cartlist, setcartList] = useState([]);

    var count = 0;
    var total = 0;

    useEffect(()=> {
        let request = {
            userid: sessionStorage.getItem("user"),
        }
        Axios.post('http://localhost:3001/readcart',request).then((response)=> {
            setcartList(response.data);
        })
    }, [])

    return(
    <>
    <Logonav></Logonav>
        <div className="container">
            <h1>Shopping Cart</h1>
            <div className="cart">
                <div className="products">
                    {cartlist.map((val,key) => {
                        

                        count++;
                        total = total + val.price;

                        return <div className="product">
                        <img src={val.image}/>
                        <div className="product-info">
                            <h3 className="product-name">{val.name}</h3>
                            <h4 className="product-price">₹ {val.price}/-</h4>                            
                            <button onClick={() => {
                                let request = {
                                            userid: sessionStorage.getItem("user"),
                                            name: val.name,
                                        }
                                        Axios.post('http://localhost:3001/removecart', request)
                                        .then( resp => {
                                            alert(resp.data.message);
                                            window.location.reload();
                                        })
                                        .catch( err => {
                                            console.log(err);
                                        })
                            }} className="product-remove">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <span className="remove">Remove</span>
                            </button>
                        </div>
                    </div>
                    })}
                    {/* <div className="product">
                        <img src="shoes.jpg"/>
                        <div className="product-info">
                            <h3 className="product-name">New Shoes</h3>
                            <h4 className="product-price">₹ 1,000</h4>                            
                            <p className="product-remove">
                                <i className="fa fa-trash" aria-hidden="true"></i>
                                <span className="remove">Remove</span>
                            </p>
                        </div>
                    </div> */}
                </div> 
                <div className="cart-total">
                    <p>
                        <span>Total Price</span>
                        <span>₹ {total}/-</span>
                    </p>
                    <p>
                        <span>Number of Items</span>
                        <span>{count}</span>
                    </p>
                    {/* <a href="checkout">Proceed to Checkout</a> */}
                    <button onClick={proceed} className="btncart">Proceed to checkout</button>
                </div>
            </div>
        </div>
    </>
    );

    function proceed(){
        if(count>0){
            window.open("/checkout","_self");
        }
        else{
            alert("Cart empty");
        }    
    }

}

export default Cart;