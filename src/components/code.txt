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
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/2560px-Goodreads_logo.svg.png"/>
			<nav ref={navRef}>
                <a href="/#"> <FaHome /> Home</a>
				<a href="/#"> <FaBookOpen /> MyBooks</a>
				<a href="/#"> <FaUser /> Community</a>
                <input 
                    type="text" 
                    placeholder="🔍 Search" 
                    // value={search}
                    // onChange={(e) => setSearch(e.target.value)}
                    />
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