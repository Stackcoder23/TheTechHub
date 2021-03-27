import React from 'react';
import ReactDOM from 'react-dom';

function Logonav() {
    return(
        <>
        <header id="header" class="alt">
				<div style={{backgroundColor:'black', fontSize:25}} class="logo">theTechHub</div>
				<a style={{backgroundColor:'black', fontSize:20}} href="#menu">MENU</a>
			</header>

			<nav id="menu">
				<ul class="links">
					<li><a style={{backgroundColor:'black', fontSize:25, textShadow: '0 0 3px white'}} href="/home">Home</a></li>
					<li><a style={{backgroundColor:'black', fontSize:25, textShadow: '0 0 3px white'}} href="/orders">Orders</a></li>
					<li><a style={{backgroundColor:'black', fontSize:20, textShadow: '0 0 3px white'}} href="/cart">Cart</a></li>
					<li><a style={{backgroundColor:'black', fontSize:20, textShadow: '0 0 3px white'}} href="/aboutus">About Us</a></li>
					<li><a style={{backgroundColor:'black', fontSize:20, textShadow: '0 0 3px white'}} href="/">Logout</a></li>
				</ul>
			</nav>
        </>
    );
}

export default Logonav;