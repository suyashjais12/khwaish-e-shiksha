import React from 'react';

class Home extends React.Component{
    render(){
return(
<div>

<div class="header-image">
			<div style={{padding: "1.2rem",class:"nav-container"}}></div>
		</div>
		<div class="kes-parent">
			<div class="kes-body container">
				<h1 class="kes-header"><b>Khwaish-e-Shiksha</b></h1>
				<div class="kes-image-mobile">
					
				</div>
				<h3 class="kes-sub-header"><b>The Beginning</b></h3>
				<p class="kes-f-para">
					This was an initiative we came up with in the year 2015. We
					observed that there were large number of old, unused books
					present in each room of our hostels. They were unnoticed and
					neglected throughout the college years. Later, these books
					were sold by the students at a very minimal amount and the
					money was not spent judiciously by them. We recognised the
					value and power these books held. We approached people to
					donate us these books, since they were old and surplus
					people readily donated them to us. The value in return for
					these books was very small but we collected enough books to
					generate a good amount of fund by selling them. We bought
					new books against these funds and donated them to the
					families who couldn’t afford books for their kids. This
					enabled us to create a more sustainable approach to generate
					funds for our organisation in the beginning and help the
					one’s in need hand-in-hand. We carried out donations for
					this campaign at IIT Kharagpur Slums, Damna Basti and
					various other slums in and around Bhubaneswar.
				</p>
				<div class="kes-row row">
					<div class="col-lg-6 col-sm-12">
						<div
							class="kes-video-image"
							style={{position: "relative"}}>
							<img
								src="http://desirefoundation.org/img/kes/kes_snippet.jpg"
								class="img-responsive"
								width="100%"/>
							<a
								href="javascript:;"
								class="play play-big"
								onclick="stopScroll(event,'VideoPopup');"
							>
								<svg
									class="Icon Icon--play"
									data-app-tmpl="Icon"
								>
									<title>Play</title>
									<svg viewBox="0 0 17 19" id="play">
										<title>Triangle</title>
										<path d="M17 9.5L0 19V0z"></path>
									</svg>
								</svg>
							</a>
						</div>
					</div>
					<div class="col-lg-6 col-sm-12">
						<div class="kes-image">
							<img
								src="http://desirefoundation.org/img/kes/kes_left.jpg"
								class="img-responsive"
								width="100%"
							/>
						</div>
					</div>
					<div class="popup" id="VideoPopup">
						<a
							href="javascript:;"
							class="popup__close"
							id="close"
							onclick="startScroll(event,'VideoPopup');"
							>&times;</a
						>
						<div class="popup__content">
							<iframe
								style={{width: "100%", height: "100%"}}
								id="youVideoPopup"
								src="https://www.youtube.com/embed/sxgHys6pbq8"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
				<h2 class="kes-sub-mid-header"><b>Testimonials</b></h2>
				<div class="row">
					<div class="col-md-8 col-center m-auto">
						<div
							id="myCarousel"
							class="carousel slide"
							data-ride="carousel"
						>
						
							<ol class="p-testimonial carousel-indicators">
								<li
									data-target="#myCarousel"
									data-slide-to="0"
									class="active"
								></li>
								<li
									data-target="#myCarousel"
									data-slide-to="1"
								></li>
								<li
									data-target="#myCarousel"
									data-slide-to="2"
								></li>
							</ol>
							

							<div class="carousel-inner">
								<div class="item carousel-item active">
									<div class="img-box">
										<img
											src="http://desirefoundation.org/img/Testimonials/soumya.jpg"
											alt=""
										/>
									</div>
									<p class="testimonial">
										Khwaish e Siksha was one of my personal
										favourite project of desire. Collecting
										all the books from all the hostels
										taught me good management skill ad well
										as helped me in doing something good for
										the society. It gave me opportunity to
										work with seniors and get comfortable
										with them. All the best Desire.
									</p>
									<p class="overview">
										<b>Soumya Kar</b>, Alumni
									</p>
								</div>
								<div class="item carousel-item">
									<div class="img-box">
										<img
											src="http://desirefoundation.org/img/Testimonials/shubham.jpg"
											alt=""
										/>
									</div>
									<p class="testimonial">
										The Fund is the backbone of every
										organization. Whatever you are going to
										do The first thing that will come into
										everyone's mind that "How to raise the
										FUND?". .With the same thought, Desire
										Foundation started a project (Khwaish e
										Siksha ) to raise funds so that we can
										bring a smile to some families. When we
										have started Desire we aimed to at least
										change the life of around 1000+ families
										but We all were college students at that
										time so we don't have much pocket money
										which can help more than 1-2 families.
										After so many thoughts and ideas, we
										concluded that if every engineering
										students will contribute 1 book itself
										which is not of their use, it will be
										helpful for us in raising our fund. With
										the same thought, we started the Khwaish
										e Siksha project in 2014, But due to
										some reason, it was not much successful.
										Again in 2015, we started the same
										project with the same hope and that year
										we collected 1000+ books overnight with
										the help of all the volunteers. Khwaish
										e Siksha is just not a project it's an
										emotion which is giving chance to all
										the engineering students to do something
										different apart from their studies for
										the betterment of the society.
									</p>
									<p class="overview">
										<b>Shubham Pandey</b>, Alumni
									</p>
								</div>
								<div class="item carousel-item">
									<div class="img-box">
										<img
											src="http://desirefoundation.org/img/Testimonials/sourav.jpg"
											alt=""
										/>
									</div>
									<p class="testimonial">
										I personally found Khwaish e Shiksha to
										be a very interesting project. It took a
										lot of hard work and efforts, but the
										memories which I got back in return was
										absolutely worth all of it. I still
										remember collection of the books, how we
										carried them in a small van form hostel
										to hostel , carrying it to the final
										destination, arranging them and all the
										laughs and good times the team shared.
										All in all it was a wonderful experience
										and I never thought working for the
										society would be so much fun. I'm
										hopeful the team is still continuing
										it's wonderful work and has a long way
										to go. All the best!
									</p>
									<p class="overview">
										<b>Sourav Paul</b>, Alumni
									</p>
								</div>
							</div>
						
							<a
								class="carousel-control left carousel-control-prev"
								href="#myCarousel"
								data-slide="prev"
							>
								<i class="fa fa-angle-left"></i>
							</a>
							<a
								class="carousel-control right carousel-control-next"
								href="#myCarousel"
								data-slide="next"
							>
								<i class="fa fa-angle-right"></i>
							</a>
						</div>
					</div>
				</div>
				<h2 class="kes-sub-mid-header"><b>Gallery</b></h2>
				<div
					id="kes-gallery-carousel"
					class="carousel slide carousel-fade"
					data-ride="carousel"
					data-interval="3000"
				>
					<ol class="p-gallery carousel-indicators">
						<li
							data-target="#kes-gallery-carousel"
							data-slide-to="0"
							class="active"
						></li>
						<li
							data-target="#kes-gallery-carousel"
							data-slide-to="1"
						></li>
						<li
							data-target="#kes-gallery-carousel"
							data-slide-to="2"
						></li>
						<li
							data-target="#kes-gallery-carousel"
							data-slide-to="3"
						></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								class="kes-gal-img d-block w-100"
								src="http://desirefoundation.org/img/kes/kes_1.jpg"
								alt="First slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Khwaish-e-Shiksha</h5>
								<p>The power of books</p>
							</div>
						</div>
						<div class="carousel-item">
							<img
								class="kes-gal-img d-block w-100"
								src="http://desirefoundation.org/img/kes/kes_2.jpg"
								alt="Second slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Khwaish-e-Shiksha</h5>
								<p>The journey is easier together</p>
							</div>
						</div>
						<div class="carousel-item">
							<img
								class="kes-gal-img d-block w-100"
								src="http://desirefoundation.org/img/kes/kes_3.jpg"
								alt="Third slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Khwaish-e-Shiksha</h5>
								<p>Passing the baton of knowledge</p>
							</div>
						</div>
						<div class="carousel-item">
							<img
								class="kes-gal-img d-block w-100"
								src="http://desirefoundation.org/img/kes/kes_4.jpg"
								alt="forth slide"
							/>
							<div class="carousel-caption d-none d-md-block">
								<h5>Khwaish-e-Shiksha</h5>
								<p>Our interns on field duty</p>
							</div>
						</div>
					</div>
					<a
						class="carousel-control-prev"
						href="#kes-gallery-carousel"
						role="button"
						data-slide="prev"
					>
						<span
							class="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next"
						href="#kes-gallery-carousel"
						role="button"
						data-slide="next"
					>
						<span
							class="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
				<h2 class="kes-sub-mid-header" style={{color: "darkcyan"}}>
					<q
						><i
							>We make a living by what we get, but we make a life
							by what we give.</i	></q>
				</h2>
				<p class="quote_nm">-Winston Churchill</p>
			</div>
		</div>
		<div class="footer-container"></div>

        </div>
)
    }
}

export default Home;