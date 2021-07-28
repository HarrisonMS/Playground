import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/PureStyles.scss";
import {
	AiFillInstagram,
	AiFillTwitterCircle,
	AiOutlineMail,
} from "react-icons/ai";
const Header = () => {
	const containerRef = useRef(null);

	const [isVisible, setIsVisible] = useState(false);

	const cbFunction = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	};
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: [0, 0.25, 0.5, 0.75, 1],
	};

	useEffect(() => {
		const observer = new IntersectionObserver(cbFunction, options);
		let target = document.querySelector(".nav-links");
		if (containerRef.current) {
			observer.observe(containerRef.current);

			if (!isVisible) {
				console.log("in the if", isVisible);
				target.classList.add("sticky");
			}
		}
		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
				target.classList.remove("sticky");
				// if (!isVisible) {

				// }
			}
		};
	}, [containerRef, options]);

	return (
		<header className="header-container ">
			<section className="header-main" ref={containerRef}>
				<div className="icon-wrap left">
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillInstagram
							fontSize="1rem"
							className="instagram"
							color="#fff"
						/>
					</a>
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillTwitterCircle
							color="#fff"
							fontSize="1rem"
							className="instagram-icon"
						/>
					</a>
				</div>
				<Link className="header-title" to="/projects">
					<h1>Pure Entertainment</h1>
				</Link>
				<div className="icon-wrap right">
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiOutlineMail
							color="#fff"
							fontSize="1rem"
							className="instagram-icon"
						/>
					</a>
				</div>
			</section>
			<nav className="nav-links">
				<NavLink exact activeClassName="active" className="nav-link" to="/">
					Home
				</NavLink>
				<NavLink activeClassName="active" className="nav-link" to="/projects">
					Services
				</NavLink>
				<NavLink activeClassName="active" className="nav-link" to="/portfolio">
					Portfolio
				</NavLink>
				<NavLink activeClassName="active" className="nav-link" to="/stories">
					Wedding Stories
				</NavLink>

				<NavLink activeClassName="active" className="nav-link" to="/about">
					About
				</NavLink>
				<NavLink activeClassName="active" className="nav-link" to="/contact">
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
