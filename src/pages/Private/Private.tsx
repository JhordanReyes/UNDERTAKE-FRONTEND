import React, { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { RoutesWithNotFound } from '../../utilities';
import { Layout } from './Layout';

export type PrivateProps = {
}

const Home = lazy(() => import("./Home/Home"))
const Dashboard = lazy(()=> import('./Dashboard/Dashboard'))

const Private: React.FC<PrivateProps> = ({ }) => {
	return (
		<RoutesWithNotFound>
			<Route path='/' element={<Layout />} >
				<Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
				<Route path={PrivateRoutes.HOME} element={<Home />} />
				<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
			</Route>
		</RoutesWithNotFound>
	)
};

export default Private;
