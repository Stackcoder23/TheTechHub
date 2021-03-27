import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Logonav from './Logonav';
import './cart.css';
import Axios from 'axios';



function Orders(){
    const [orderlist, setorderList] = useState([]);

    useEffect(()=> {
        let request = {
            userid: sessionStorage.getItem("user"),
        }
        Axios.post('http://localhost:3001/readorders',request).then((response)=> {
            setorderList(response.data);
        })
    }, [])

    return(
        <>
        <Logonav></Logonav>
        <div className="container">
            <h1>Your Orders</h1>
            <div className="cart">
                <div className="products">
                    {orderlist.map((val,key) => {

                        return <div className="product">
                        <div className="product-info">
                            <h3 className="product-name">{val.productname}</h3>
                            <h4 className="product-price">₹ {val.amount}/-</h4>  
                            <h4 className="product-price">{val.date}/-</h4>                            
                        </div>
                    </div>
                    })}
                </div> 
            </div>
        </div>
        </>
    );
}

export default Orders;