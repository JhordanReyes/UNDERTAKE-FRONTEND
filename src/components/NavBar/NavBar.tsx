import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { Logout } from '../Logout';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../redux/slices/darkModeSlice';

export type NavBarProps = {
}

const NavBar: React.FC<NavBarProps> = ({ }) => {

	const [navBarIsVisible, setNavBarIsVisible] = useState(false)
	const dispatch = useDispatch()
	const darkMode: boolean = useSelector((store: AppStore) => store.darkMode)

	const handleNavBar = () => {
		setNavBarIsVisible(!navBarIsVisible)
	}

	const handleDarkMode = () => {
		dispatch(toggleDarkMode(darkMode))
	}

	useEffect(() => {
		const navBar = document.getElementById("navbar-mobile")
		navBarIsVisible ? navBar?.classList.add("navBarIsVisible") : navBar?.classList.remove("navBarIsVisible")
	}, [navBarIsVisible])

	return (
		<div className='navbar'>
			<h2>Undertake</h2>
			<i
				id='menu'
				className='bx bx-menu icon'
				onClick={handleNavBar}
			></i>
			{/* NAVBAR MOBILE */}
			<nav className='navbar-mobile' id='navbar-mobile'>
				<i
					className='bx bx-x icon close'
					onClick={handleNavBar}
				></i>
				<div>
					<Link
						to={PrivateRoutes.HOME}
						onClick={handleNavBar}
					>Home</Link>
					<Link
						onClick={handleNavBar}
						to={PrivateRoutes.DASHBOARD}
					>Dashboard</Link>
					<i
						onClick={() => handleDarkMode()}
						className={`bx bxs-${darkMode ? "sun" : "moon"} icon`}
					/>
					<Logout />
				</div>
			</nav>
			{/* NAVBAR DESKTOP */}
			<nav className='navbar-desktop' id='navbar-desktop'>
				<Link
					to={PrivateRoutes.HOME}
				>Home</Link>
				<Link
					to={PrivateRoutes.DASHBOARD}
				>Dashboard</Link>
				<Logout />
				<i
					onClick={() => handleDarkMode()}
					className={`bx bxs-${darkMode ? "sun" : "moon"} icon`}
				/>
			</nav>
		</div>
	)
};

export default NavBar;
