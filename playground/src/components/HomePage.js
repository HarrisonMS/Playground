import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";
import MyForm from "./Email.js";
function HomePage() {
	const containerRef = useRef(null);

	const [isVisible, setIsVisible] = useState(false);

	const cbFunction = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	};
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	};

	useEffect(() => {
		const observer = new IntersectionObserver(cbFunction, options);

		if (containerRef.current) {
			observer.observe(containerRef.current);

			let target = document.querySelector(".button_wrapper");
			if (isVisible) {
				target.classList.add("button_animation");
			}
		}
		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
		};
	}, [containerRef, options]);

	const recentWorkData = [
		{
			left_id: 1,
			left_imageUrl: "https://picsum.photos/300",
			left_description: "Left Description",
			right_id: 1,
			right_imageUrl: "https://picsum.photos/900",
			right_description: "Right Description",
		},
		{
			left_id: 2,
			left_imageUrl: "https://picsum.photos/800",
			left_description: "Left Description",
			right_id: 2,
			right_imageUrl: "https://picsum.photos/700",
			right_description: "Right Description",
		},
		{
			left_id: 3,
			left_imageUrl: "https://picsum.photos/300",
			left_description: "Left Description",
			right_id: 3,
			right_imageUrl: "https://picsum.photos/600",
			right_description: "Right Description",
		},
	];

	return (
		<div>
			<section className="about">
				<div role="img" aria-label="building in NYC" className="img one"></div>
				<section className="about-info">
					<h3>Hey I'm Heidi,</h3>
					<div className="p-wrapper">
						<p className="p-one button-animation" ref={containerRef}>
							and I document human stories with a camera. My only goal is to
							convert your wedding day into images, that tell a story for
							generations to come. That’s what it’s all about for me.
						</p>
						<p>
							It’s not even so much about weddings, but about you and your story
							on any given day. Wedding days are just perfect for that. So much
							happening, so many great and little moments that tell their very
							own story. So many emotions, friends and family. There couldn’t be
							a better day to tell an amazing story in images. Images that
							reflect you, as you are.
						</p>
					</div>
					<div className="button_wrapper">
						<Link to="/about">
							<button className="button">About Me</button>
						</Link>
					</div>
				</section>
			</section>
			<section className="recent_work">
				<div className="testing">
					<h3>Recent Work</h3>
				</div>
				{recentWorkData.map((item) => (
					<div className="recent_work_wrapper">
						<div className="recent_work_left" key={item.left_id}>
							<div className="polaroid">
								<img src={item.left_imageUrl}></img>
								<p className="recent_work_p">{item.left_description}</p>
							</div>
						</div>
						<div className="recent_work_right" key={item.right_id}>
							<div className="polaroid">
								<img src={item.right_imageUrl}></img>
								<p className="recent_work_p">{item.right_description}</p>
							</div>
						</div>
					</div>
				))}
				{/* <div className="recent_work_wrapper">
					<div className="recent_work_left">
						<div className="polaroid">
							<img src="https://picsum.photos/600"></img>
							<p className="recent_work_p">Description of Photograph</p>
						</div>
					</div>
					<div className="recent_work_right">
						<div className="polaroid">
							<img src="https://picsum.photos/500"></img>
							<p className="recent_work_p">Description of Photograph</p>
						</div>
					</div>
				</div>
				<div className="recent_work_wrapper">
					<div className="recent_work_left">
						<div className="polaroid">
							<img src="https://picsum.photos/400"></img>
							<p className="recent_work_p">Description of Photograph</p>
						</div>
					</div>
					<div className="recent_work_right">
						<div className="polaroid">
							<img src="https://picsum.photos/300"></img>
							<p className="recent_work_p">Description of Photograph</p>
						</div>
					</div>
				</div> */}
			</section>
			<section class="hero"></section>
			<MyForm />
			<Footer />
		</div>
	);
}

export default HomePage;
