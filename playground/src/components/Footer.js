import React from "react";
import {
	AiFillInstagram,
	AiFillTwitterCircle,
	AiOutlinePhone,
} from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {
	return (
		<footer className="footer-distributed">
			<div className="footer-left">
				<p className="footer-links">
					<a href="#">Home</a> ·<a href="#">About</a> ·<a href="#">Pricing</a> ·
					<a href="#">About</a> ·<a href="#">Faq</a> ·<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Bangin &copy; 2018</p>
			</div>

			<div className="footer-center">
				<div>
					<i className="fa fa-map-marker"></i>
					<p>
						<span>6969 Bath Tub Street</span> Thomas's House, WA
					</p>
				</div>

				<div>
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiOutlinePhone fontSize="1rem" color="#fff" />
					</a>
					<p>911</p>
				</div>

				<div>
					<a href="https://twitter.com/HarrisonSeaborn">
						<FaRegEnvelope fontSize="1rem" color="#fff" />
					</a>
					<p>
						<a href="mailto:support@company.com">onlyguys@gmail.com</a>
					</p>
				</div>
			</div>

			<div className="footer-right">
				<p className="footer-company-about">
					<span>About this guy</span> Blah Blah..Blah blah bl;ah blah
				</p>

				<div className="footer-icons">
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillInstagram
							fontSize="1rem"
							classNameName="instagram"
							color="#fff"
						/>
					</a>
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillTwitterCircle
							color="#fff"
							fontSize="1rem"
							classNameName="instagram-icon"
						/>
					</a>
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillInstagram
							fontSize="1rem"
							classNameName="instagram"
							color="#fff"
						/>
					</a>
					<a href="https://twitter.com/HarrisonSeaborn">
						<AiFillTwitterCircle
							color="#fff"
							fontSize="1rem"
							classNameName="instagram-icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
