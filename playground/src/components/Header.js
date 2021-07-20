import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/PureStyles.scss";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
const Header = () => {
	return (
		<header className="header-container">
			<section className="header-main">
				<div className="icon-wrap left">
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillInstagram
							fontSize="1em"
							className="instagram"
							color="#fff"
						/>
					</a>
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillTwitterCircle
							color="#fff"
							fontSize="1em"
							className="instagram-icon"
						/>
					</a>
				</div>
				<Link className="header-title" to="/projects">
					<h1>Pure Entertainment</h1>
				</Link>
				<div className="icon-wrap right">
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillInstagram
							color="#fff"
							fontSize="1em"
							className="instagram-icon"
						/>
					</a>
				</div>
			</section>
			<nav className="nav-links">
				<Link className="nav-link" to="/">
					Home
				</Link>
				<NavLink className="nav-link" to="/projects">
					Wedding Stories
				</NavLink>
				<NavLink className="nav-link" to="/about">
					About
				</NavLink>
				<NavLink className="nav-link" to="/contact">
					Contact
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
