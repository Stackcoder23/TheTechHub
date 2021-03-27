import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';
import Logonav from './Logonav';
import Footer from './Footer';

function Home(props){
	sessionStorage.removeItem("mbid");
	sessionStorage.removeItem("proid");
	sessionStorage.removeItem("ramid");
	sessionStorage.removeItem("stoid");
	sessionStorage.removeItem("gfxid");
	sessionStorage.removeItem("psuid");
	sessionStorage.removeItem("cabid");
	sessionStorage.removeItem("coolerid");
	const user = sessionStorage.getItem("user");
	if(user == null){
		window.open("/","_self");
	}
    return (
        <>
			<Logonav></Logonav>
			<Slide></Slide>
			<section id="one" class="wrapper style2">
				<div class="inner">
					<div class="grid-style">

						<div>
							<div class="box">
								<div class="image fit">
									<img src="assets/images/build.jpg" alt="" />
								</div>
								<div class="content">
									<header class="align-center">
										
										<h2 style={{color: "white"}}>Build your PC</h2>
									</header>
									<p></p>
									<footer class="align-center">
										<a href="/custom" class="button alt">GO</a>
									</footer>
								</div>
							</div>
						</div>

						<div>
							<div class="box">
								<div class="image fit">
									<img src="assets/images/laptop.jpg" alt="" />
								</div>
								<div class="content">
									<header class="align-center">
										
										<h2 style={{color: "white"}}>Laptops</h2>
									</header>
									<p></p>
									<footer class="align-center">
										<a href="/laptop" class="button alt">GO</a>
									</footer>
								</div>
							</div>
						</div>
						<div>
							<div class="box">
								<div class="image fit">
									<img src="assets/images/prebuilt.jpg" alt="" />
								</div>
								<div class="content">
									<header class="align-center">
										
										<h2 style={{color: "white"}}>Pre-Built PCs</h2>
									</header>
									<p></p>
									<footer class="align-center">
										<a href="/prebuilt" class="button alt">GO</a>
									</footer>
								</div>
							</div>
						</div>
						<div>
							<div class="box">
								<div class="image fit">
									<img src="assets/images/build.jpg" alt="" />
								</div>
								<div class="content">
									<header class="align-center">
										
										<h2 style={{color: "white"}}>Parts</h2>
									</header>
									<p></p>
									<footer class="align-center">
										<a href="accessory" class="button alt">GO</a>
									</footer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer></Footer>
        </>
    );
}

export default Home;