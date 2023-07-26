import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';

export type RoutesWithNotFoundProps = {
	children: JSX.Element | JSX.Element[]
}

const RoutesWithNotFound: React.FC<RoutesWithNotFoundProps>  = ({children}) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
};

export default RoutesWithNotFound;
