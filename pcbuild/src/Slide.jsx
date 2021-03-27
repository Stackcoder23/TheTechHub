import React from 'react';
import ReactDOM from 'react-dom';

function Slide() {
    return(
        <>
            <section class="banner full">
				<article>
					<img style={{opacity: 0.7}} src="assets/images/slide1.jpg" alt="" />
					<div class="inner">
						<header>
							<p>In Your Budget</p>
							<h2>Build PC</h2>
						</header>
					</div>
				</article>
				<article>
					<img style={{opacity: 0.7}} src="assets/images/slide2.jpg" alt="" />
					<div class="inner">
						<header>
							<p>Best and Cheapest</p>
							<h2>Pre-built PC</h2>
						</header>
					</div>
				</article>
				<article>
					<img style={{opacity: 0.7}} src="assets/images/slide3.jpg"  alt="" />
					<div class="inner">
						<header>
							<p>High Performance</p>
							<h2>Laptops</h2>
						</header>
					</div>
				</article>
			</section>
        </>
    );
}

export default Slide;