import { useRef, useState } from "react";
import '../styles/Navbar.css';
import { FaBars, FaBookOpen, FaHome, FaTimes, FaUser } from "react-icons/fa";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"/>
			<nav ref={navRef}>
				<a href="/#"> <FaHome /> Home</a>
				<a href="/#"> <FaBookOpen /> MyBooks</a>
				<a href="/#"> <FaUser /> Community</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;