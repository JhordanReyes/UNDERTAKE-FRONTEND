import React from 'react';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../../components/NavBar';

export type LayoutProps = {
}

const Layout: React.FC<LayoutProps>  = ({}) => {

	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	)
};

export default Layout;
