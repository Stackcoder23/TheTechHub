import React, { useEffect, useState } from 'react';
import './checkout.css';
import Axios from 'axios';
import Logonav from './Logonav';

function Checkout(){

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

  cartlist.map((val,key) => {
    count++;
    total = total + val.price;                        
  })

  function order(e){
    e.preventDefault();
    let request = {
      userid: sessionStorage.getItem("user"),
      amount: total,
      name: document.getElementById('name').value,
      cardno : document.getElementById('ccnum').value,
    }
    Axios.post("http://localhost:3001/payment", request)
    .then(resp => {
        cartlist.map((val,key) => {
          let request = {
            userid: sessionStorage.getItem("user"),
            productname: val.name,
            amount: val.price,
            address: document.getElementById('name').value +"\n"+ document.getElementById('address').value +"\n"+
            document.getElementById('city').value +" "+ document.getElementById('state').value +" "+ document.getElementById('zip').value,
          }
        Axios.post("http://localhost:3001/order", request)
        .then(resp => {
                console.log(resp.data.message);
            }
            ).catch(resp => {
                alert(resp.data.message);
            });                  
        })

        let request = {
          userid: sessionStorage.getItem("user"),
        }
        Axios.post('http://localhost:3001/deletecart',request).then((response)=> {
            alert("Order Confirmed");
            window.open("/home","_self");
        })

      }
      ).catch(resp => {
          alert(resp.data.message);
      });     
      
      
    
  }

    return(
        <>
        <Logonav></Logonav>
        <br/><br/>
        <br/><br/>
        <div className="row">
  <div className="col-75">
    <div className="container">
      
      <form onSubmit={(e) => order(e)}>
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" id="name" name="name" placeholder="Full name" required/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="address" name="address" placeholder="Address" required/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="City" required/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="state" required/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="Zip Code" required/>
              </div>
            </div>
          </div>

          <div className="col-50">
             <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
              <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
              <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="Name" required/>
            <label for="ccnum">Card number</label>
            <input type="text" pattern="\d*" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" maxLength="16" required/>
            <label for="expmonth">Exp Month</label>
            {/* <input type="text" id="expmonth" name="expmonth" placeholder="Month" required/> */}
            <select id="expmonth" name="expmonth" required>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                {/* <input type="text" id="expyear" name="expyear" placeholder="Year" required/> */}
                <select id="expyear" name="expyear" required>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="000" maxLength="3" required/>
              </div>
            </div> 
          </div>
          
        </div>
        <input type="submit" value="Continue to checkout" className="btn12"/>
        {/* <button onClick={order} className="btn12">Continue to checkout</button> */}
      </form>
      
    </div>
  </div>
  <div className="col-25">
    <div className="container">
    
      <h4>Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> <b>{count}</b></span></h4>
      {cartlist.map((val,key) => {
                        
                        return <p>{val.name} <span className="price">₹{val.price}</span></p>
                        
                    })}
      <hr/>
      <p>Total <span className="price" style={{color:"black"}}><b>₹{total}</b></span></p>
    </div>
  </div>
</div>
        </>
    );
}

export default Checkout;