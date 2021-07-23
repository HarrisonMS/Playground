import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function HomePage() {
	const containerRef = useRef(null);

	const [isVisible, setIsVisible] = useState(false);

	const cbFunction = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
		console.log(entry.isIntersecting);
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

			<section class="hero"></section>
		</div>
	);
}

export default HomePage;
